import { BaseRepository } from "../../repositories/implementations/BaseRepository";
import { DeleteBaseController } from "./DeleteBaseController";
import { DeleteBaseUseCase } from "./DeleteBaseUseCase";

export default (): DeleteBaseController => {
    const baseRepository = new BaseRepository();

    const deleteBaseUseCase = new DeleteBaseUseCase(baseRepository);

    const deleteBaseController = new DeleteBaseController(deleteBaseUseCase);

    return deleteBaseController;
};
