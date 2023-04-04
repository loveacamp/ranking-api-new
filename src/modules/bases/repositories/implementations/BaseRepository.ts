import { Repository } from "typeorm";

import { AppDataSource } from "../../../../database";
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
        });

        return bases;
    }

    async create({
        name,
        term,
        cityId,
        churchId,
    }: ICreateBaseDTO): Promise<void> {
        const base = this.repository.create({
            name,
            term,
            city: { id: cityId },
            church: { id: churchId },
        });

        await this.repository.insert(base);
    }

    async edit({ churchId, cityId, name, id }: IEditBaseDTO): Promise<void> {
        await this.repository.update(id, {
            church: { id: churchId },
            city: { id: cityId },
            name,
        });
    }

    async delete(baseId: number): Promise<void> {
        await this.repository.delete(baseId);
    }

    async addScore({ baseId, rankingId }: IAddScoreDTO): Promise<void> {
        const base = await this.repository.findOne({
            where: { id: baseId },
            relations: ["rankings"],
        });

        const ranking = new Ranking();
        ranking.id = rankingId;

        base.rankings.push(ranking);

        await this.repository.save(base);
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

        let index = 0;
        const getPosition = (totalScore: number): number | null => {
            if (totalScore <= 0) {
                return null;
            }

            index += 1;
            return index;
        };

        const scoresReturn: IListScoresDTO[] = scores.map((score) => {
            return {
                id: +score.id,
                name: String(score.name),
                totalScore: +score.totalScore,
                position: getPosition(+score.totalScore),
            };
        });

        console.log(scoresReturn, scores);

        return scoresReturn;
    }
}

export { BaseRepository };
