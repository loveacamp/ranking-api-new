import { RankingRepository } from "../../repositories/implementations/RankingRepository";
import { CreateRankingController } from "./CreateRankingController";
import { CreateRankingUseCase } from "./CreateRankingUseCase";

export default (): CreateRankingController => {
    const rankingRepository = new RankingRepository();

    const createRankingUseCase = new CreateRankingUseCase(rankingRepository);

    const createRankingController = new CreateRankingController(
        createRankingUseCase
    );

    return createRankingController;
};
