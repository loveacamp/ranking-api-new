import { State } from "../../entities/State";
import { IStateRepository } from "../../repositories/IStateRepository";

class ListstatesUseCase {
    constructor(private stateRepository: IStateRepository) {
        //
    }

    async execute(): Promise<State[]> {
        const states: State[] = await this.stateRepository.list();

        return states;
    }
}

export { ListstatesUseCase };
