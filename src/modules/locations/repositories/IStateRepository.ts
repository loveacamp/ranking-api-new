import { State } from "../entities/State";

interface IStateRepository {
    list(): Promise<State[]>;
}

export { IStateRepository };
