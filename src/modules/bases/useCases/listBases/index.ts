import { BaseRepository } from "../../repositories/implementations/BaseRepository";
import { ListBaseController } from "./ListBaseController";
import { ListBaseUseCase } from "./ListBaseUseCase";

export default (): ListBaseController => {
    const baseRepository = new BaseRepository();

    const listBaseUseCase = new ListBaseUseCase(baseRepository);

    const listBaseController = new ListBaseController(listBaseUseCase);

    return listBaseController;
};
