import { RankingRepository } from "../../repositories/implementations/RankingRepository";
import { EditRankingController } from "./EditRankingController";
import { EditRankingUseCase } from "./EditRankingUseCase";

export default (): EditRankingController => {
    const rankingRepository = new RankingRepository();

    const editRankingUseCase = new EditRankingUseCase(rankingRepository);

    const editRankingController = new EditRankingController(editRankingUseCase);

    return editRankingController;
};
