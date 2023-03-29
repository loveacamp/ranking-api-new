import { City } from "../../entities/City";
import { ICityRepository } from "../../repositories/ICityRepository";

class ListCitiesUseCase {
    constructor(private cityRepository: ICityRepository) {
        //
    }

    async execute(stateId: number): Promise<City[]> {
        const cities = await this.cityRepository.list(stateId);

        return cities;
    }
}

export { ListCitiesUseCase };
