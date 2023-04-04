import { Ranking } from "../../entities/Ranking";
import { IRankingRepository } from "../../repositories/IRankingRepository";

class ListAllRankingUseCase {
    constructor(private rankingRepository: IRankingRepository) {
        //
    }

    async execute(): Promise<Ranking[]> {
        const rankings = await this.rankingRepository.listAll();

        return rankings;
    }
}

export { ListAllRankingUseCase };
