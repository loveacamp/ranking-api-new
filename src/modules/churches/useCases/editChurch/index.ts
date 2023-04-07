import { ChurchRepository } from "../../repositories/implementations/ChurchRepository";
import { EditChurchController } from "./EditChurchController";
import { EditChurchUseCase } from "./EditChurchUseCase";

export default (): EditChurchController => {
    const churchRepository = new ChurchRepository();

    const editChurchUseCase = new EditChurchUseCase(churchRepository);

    const editChurchController = new EditChurchController(editChurchUseCase);

    return editChurchController;
};
