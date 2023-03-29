import { RankingRepository } from "../../repositories/implementations/RankingRepository";
import { ListRankingController } from "./ListRankingController";
import { ListRankingUseCase } from "./ListRankingUseCase";

export default (): ListRankingController => {
    const rankingRepository = new RankingRepository();

    const listRankingUseCase = new ListRankingUseCase(rankingRepository);

    const listRankingController = new ListRankingController(listRankingUseCase);

    return listRankingController;
};
