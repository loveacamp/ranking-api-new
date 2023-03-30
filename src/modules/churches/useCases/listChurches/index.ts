import { ChurchRepository } from "../../repositories/implementations/ChurchRepository";
import { ListChurchController } from "./ListChurchController";
import { ListChurchesUseCase } from "./ListChurchesUseCase";

export default (): ListChurchController => {
    const churchRepository = new ChurchRepository();

    const listChurchUseCase = new ListChurchesUseCase(churchRepository);

    const listChurchController = new ListChurchController(listChurchUseCase);

    return listChurchController;
};
