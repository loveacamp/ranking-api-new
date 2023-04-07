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

    async list(): Promise<Ranking[]> {
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
    }: ICreateRankingDTO): Promise<Ranking> {
        const ranking: Ranking = this.repository.create({
            score,
            description,
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

    async edit({ description, score, id }: IEditRankingDTO): Promise<void> {
        await this.repository.update(id, {
            description,
            score,
        });
    }

    async inactive(id: number): Promise<void> {
        await this.repository.update(id, { status: false });
    }
}

export { RankingRepository };
