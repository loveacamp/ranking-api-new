import { BaseRepository } from "../../repositories/implementations/BaseRepository";
import { EditBaseController } from "./EditBaseController";
import { EditBaseUseCase } from "./EditBaseUseCase";

export default (): EditBaseController => {
    const baseRepository = new BaseRepository();

    const editBaseUseCase = new EditBaseUseCase(baseRepository);

    const editBaseController = new EditBaseController(editBaseUseCase);

    return editBaseController;
};
