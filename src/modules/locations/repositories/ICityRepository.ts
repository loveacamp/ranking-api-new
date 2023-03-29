import { City } from "../entities/City";

interface ICityRepository {
    list(stateId: number): Promise<City[]>;
}

export { ICityRepository };
