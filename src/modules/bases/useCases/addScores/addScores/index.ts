import { BaseRepository } from "../../../repositories/implementations/BaseRepository";
import { AddScoreController } from "./AddScoreController";
import { AddScoreUseCase } from "./AddScoreUseCase";

export default (): AddScoreController => {
    const baseRepository = new BaseRepository();

    const addScoreUseCase = new AddScoreUseCase(baseRepository);

    const addScoreController = new AddScoreController(addScoreUseCase);

    return addScoreController;
};
