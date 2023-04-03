import { RankingRepository } from "../../repositories/implementations/RankingRepository";
import { InactiveRankingController } from "./InactiveRankingController";
import { InactiveRankingUseCase } from "./InactiveRankingUseCase";

export default (): InactiveRankingController => {
    const rankingRepository = new RankingRepository();

    const inactiveRankingUseCase = new InactiveRankingUseCase(
        rankingRepository
    );

    const inactiveRankingController = new InactiveRankingController(
        inactiveRankingUseCase
    );

    return inactiveRankingController;
};
