import { MoreThanOrEqual, Repository } from "typeorm";

import { AppDataSource } from "../../../../database";
import { ICreateRankingDTO } from "../../../dtos/ICreateRankingDTO";
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
    }: ICreateRankingDTO): Promise<void> {
        const ranking: Ranking = this.repository.create({
            score,
            description,
            type,
            expiredAt,
        });

        await this.repository.save(ranking);
    }

    async inactive(id: number): Promise<void> {
        await this.repository.update(id, { status: false });
    }
}

export { RankingRepository };
