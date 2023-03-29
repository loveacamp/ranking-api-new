import { Repository } from "typeorm";

import { AppDataSource } from "../../../../database";
import { City } from "../../entities/City";
import { ICityRepository } from "../ICityRepository";

class CityRepository implements ICityRepository {
    repository: Repository<City>;

    constructor() {
        this.repository = AppDataSource.getRepository(City);
    }

    async list(stateId: number): Promise<City[]> {
        const cities = await this.repository.find({
            where: { state: { id: stateId } },
        });

        return cities;
    }
}

export { CityRepository };
