import { Repository } from "typeorm";

import { AppDataSource } from "../../../../database";
import { State } from "../../entities/State";
import { IStateRepository } from "../IStateRepository";

class StateRepository implements IStateRepository {
    private repository: Repository<State>;

    constructor() {
        this.repository = AppDataSource.getRepository(State);
    }

    async list(): Promise<State[]> {
        const states: State[] = await this.repository.find();

        return states;
    }
}

export { StateRepository };
