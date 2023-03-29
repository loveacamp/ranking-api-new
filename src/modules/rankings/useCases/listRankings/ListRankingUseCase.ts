import { Ranking } from "../../entities/Ranking";
import { IRankingRepository } from "../../repositories/IRankingRepository";

class ListRankingUseCase {
    constructor(private rankingRepository: IRankingRepository) {
        //
    }

    async execute(): Promise<Ranking[]> {
        const rankings = await this.rankingRepository.list();

        return rankings;
    }
}

export { ListRankingUseCase };
