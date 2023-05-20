import { RankingRepository } from "../../../../rankings/repositories/implementations/RankingRepository";
import { BaseRepository } from "../../../repositories/implementations/BaseRepository";
import { AddScoreController } from "./AddScoreController";
import { AddScoreUseCase } from "./AddScoreUseCase";

export default (): AddScoreController => {
    const baseRepository = new BaseRepository();
    const rankingRepsitory = new RankingRepository();

    const addScoreUseCase = new AddScoreUseCase(
        baseRepository,
        rankingRepsitory
    );

    const addScoreController = new AddScoreController(addScoreUseCase);

    return addScoreController;
};
