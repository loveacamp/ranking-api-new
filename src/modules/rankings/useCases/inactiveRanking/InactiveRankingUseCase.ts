import { IRankingRepository } from "../../repositories/IRankingRepository";

class InactiveRankingUseCase {
    constructor(private rankingRepository: IRankingRepository) {
        //
    }

    async execute(rankingId: number): Promise<void> {
        await this.rankingRepository.inactive(rankingId);
    }
}

export { InactiveRankingUseCase };
