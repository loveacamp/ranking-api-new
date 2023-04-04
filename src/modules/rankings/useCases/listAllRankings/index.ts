import { RankingRepository } from "../../repositories/implementations/RankingRepository";
import { ListAllRankingController } from "./ListAllRankingController";
import { ListAllRankingUseCase } from "./ListAllRankingUseCase";

export default (): ListAllRankingController => {
    const rankingRepository = new RankingRepository();

    const listRankingUseCase = new ListAllRankingUseCase(rankingRepository);

    const listRankingController = new ListAllRankingController(
        listRankingUseCase
    );

    return listRankingController;
};
