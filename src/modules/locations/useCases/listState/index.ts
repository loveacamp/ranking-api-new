import { StateRepository } from "../../repositories/implementations/StateRepository";
import { ListStateController } from "./ListStateController";
import { ListstatesUseCase } from "./ListStatesUseCase";

export default (): ListStateController => {
    const stateRepository = new StateRepository();

    const listStateUseCase = new ListstatesUseCase(stateRepository);

    const listStateController = new ListStateController(listStateUseCase);

    return listStateController;
};
