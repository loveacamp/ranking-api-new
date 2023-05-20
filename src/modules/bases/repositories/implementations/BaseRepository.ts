import { Repository } from "typeorm";

import { AppDataSource } from "../../../../database";
import { ResolveScoresService } from "../../../../utils/ResolveScoresService";
import { IAddScoreDTO } from "../../../dtos/IAddScoreDTO";
import { ICreateBaseDTO, IEditBaseDTO } from "../../../dtos/ICreateBaseDTO";
import { IListScoresDTO } from "../../../dtos/IListScoresDTO";
import { Ranking } from "../../../rankings/entities/Ranking";
import { Base } from "../../entities/Base";
import { IBaseRepository } from "../IBaseRepository";

class BaseRepository implements IBaseRepository {
    repository: Repository<Base>;

    constructor() {
        this.repository = AppDataSource.getRepository(Base);
    }

    async list(): Promise<Base[]> {
        const bases = await this.repository.find({
            relations: {
                city: { state: true },
                church: true,
                rankings: true,
            },
            order: { name: "ASC" },
        });

        return bases;
    }

    async create({
        name,
        term,
        cityId,
        churchId,
    }: ICreateBaseDTO): Promise<Base> {
        const base = await this.repository
            .createQueryBuilder()
            .insert()
            .values({
                name,
                term,
                city: { id: cityId },
                church: { id: churchId },
            })
            .returning("id")
            .execute();

        const baseRuturning = await this.repository.findOne({
            where: { id: base.identifiers[0].id },
            relations: {
                city: { state: true },
                church: true,
                rankings: true,
            },
        });

        return baseRuturning;
    }

    async edit({ churchId, cityId, name, id }: IEditBaseDTO): Promise<Base> {
        const base: Base = await this.repository.findOne({
            where: { id },
            relations: ["church", "city"],
        });

        base.church.id = churchId;
        base.city.id = cityId;
        base.name = name;

        await this.repository.save(base);

        return base;
    }

    async delete(baseId: number): Promise<void> {
        await this.repository.delete(baseId);
    }

    async addScore({ baseId, rankingId }: IAddScoreDTO): Promise<void> {
        const base: Base = await this.repository.findOne({
            where: { id: baseId },
            relations: ["rankings"],
        });

        const ranking: Ranking = new Ranking();
        ranking.id = rankingId;

        await this.repository
            .createQueryBuilder()
            .relation(Base, "rankings")
            .of(base)
            .add(ranking);
    }

    async listScores(): Promise<IListScoresDTO[]> {
        const qb = this.repository.createQueryBuilder("base");

        const scores = await qb
            .select(["id", "name"])
            .addSelect(
                (qb) =>
                    qb
                        .select("SUM(r.score)")
                        .from("rankings", "r")
                        .leftJoin(
                            "bases_rankings_rankings",
                            "br",
                            `r.id = "br"."rankingsId"`
                        )
                        .where("base.id = br.basesId"),
                "totalScore"
            )
            .addOrderBy("3", "DESC")
            .getRawMany();

        const resolveScores = new ResolveScoresService(scores);
        return resolveScores.getResults();
    }

    async existScoreInDate(
        initialDate: Date,
        finalDate: Date,
        baseId: number,
        rankingId: number
    ): Promise<boolean> {
        const exists = await this.repository
            .createQueryBuilder()
            .leftJoin("bases_rankings_rankings", "br", "Base.id = br.basesId")
            .where(
                `(br."createdAt" BETWEEN :initialDate AND :finalDate) AND (br.basesId = :baseId AND br.rankingsId = :rankingId)`,
                {
                    initialDate,
                    finalDate,
                    baseId,
                    rankingId,
                }
            )

            .getExists();

        return exists;
    }
}

export { BaseRepository };
