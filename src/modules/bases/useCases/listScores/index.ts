import { BaseRepository } from "../../repositories/implementations/BaseRepository";
import { ListScoresController } from "./ListScoresController";
import { ListScoresUseCase } from "./ListScoresUseCase";

export default (): ListScoresController => {
    const baseRepository = new BaseRepository();

    const listScoresUseCase = new ListScoresUseCase(baseRepository);

    const listScoresController = new ListScoresController(listScoresUseCase);

    return listScoresController;
};
