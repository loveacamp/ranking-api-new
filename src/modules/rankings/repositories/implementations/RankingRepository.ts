import { MoreThanOrEqual, Repository } from "typeorm";

import { AppDataSource } from "../../../../database";
import { ICreateRankingDTO } from "../../../dtos/ICreateRankingDTO";
import { IEditRankingDTO } from "../../../dtos/IEditRankingDTO";
import { Ranking } from "../../entities/Ranking";
import { IRankingRepository } from "../IRankingRepository";

class RankingRepository implements IRankingRepository {
    repository: Repository<Ranking>;

    constructor() {
        this.repository = AppDataSource.getRepository(Ranking);
    }

    async find(id: number): Promise<Ranking> {
        const ranking = this.repository.findOne({
            where: { id },
        });

        return ranking;
    }

    async list(): Promise<Ranking[]> {
        console.log("aqui eu passei aqui", new Date());
        const rankings: Ranking[] = await this.repository.find({
            order: { createdAt: "ASC" },
            where: {
                expiredAt: MoreThanOrEqual(new Date()),
                status: true,
            },
        });

        return rankings;
    }

    async listAll(): Promise<Ranking[]> {
        const rankings: Ranking[] = await this.repository.find({
            order: { createdAt: "ASC" },
        });

        return rankings;
    }

    async create({
        score,
        description,
        type,
        expiredAt,
        recurrence,
        detailing,
    }: ICreateRankingDTO): Promise<Ranking> {
        const ranking: Ranking = this.repository.create({
            score,
            description,
            recurrence,
            detailing,
            type,
            expiredAt,
        });

        const insertResult = await this.repository
            .createQueryBuilder()
            .insert()
            .values(ranking)
            .returning(["id", "createdAt", "updatedAt"])
            .execute();

        ranking.id = insertResult.identifiers[0].id;
        ranking.createdAt = insertResult.raw[0].createdAt;
        ranking.updatedAt = insertResult.raw[0].updatedAt;

        return ranking;
    }

    async edit({
        description,
        score,
        detailing,
        id,
    }: IEditRankingDTO): Promise<Ranking> {
        const ranking: Ranking = await this.repository.findOne({
            where: { id },
        });

        ranking.description = description;
        ranking.score = score;
        ranking.detailing = detailing;

        await this.repository.save(ranking);

        return ranking;
    }

    async inactive(id: number): Promise<void> {
        await this.repository.update(id, { status: false });
    }
}

export { RankingRepository };
