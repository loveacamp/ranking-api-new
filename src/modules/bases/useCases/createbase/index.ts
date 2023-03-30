import { BaseRepository } from "../../repositories/implementations/BaseRepository";
import CreateBaseController from "./CreateBaseController";
import { CreateBaseUseCase } from "./CreateBaseUseCase";

export default (): CreateBaseController => {
    const baseRepository = new BaseRepository();

    const createBaseUseCase = new CreateBaseUseCase(baseRepository);

    const createBaseController = new CreateBaseController(createBaseUseCase);

    return createBaseController;
};
