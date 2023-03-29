import { Repository } from "typeorm";

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
        });

        return rankings;
    }

    async create({ score, description }: ICreateRankingDTO): Promise<void> {
        const ranking: Ranking = this.repository.create({ score, description });

        await this.repository.save(ranking);
    }
}

export { RankingRepository };