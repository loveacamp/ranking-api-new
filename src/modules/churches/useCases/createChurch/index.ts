import { ChurchRepository } from "../../repositories/implementations/ChurchRepository";
import { CreateChurchController } from "./CreateChurchController";
import { CreateChurchUseCase } from "./CreateChurchUseCase";

export default (): CreateChurchController => {
    const churchRepository = new ChurchRepository();

    const createChurchUseCase = new CreateChurchUseCase(churchRepository);

    const createChurchController = new CreateChurchController(
        createChurchUseCase
    );

    return createChurchController;
};
