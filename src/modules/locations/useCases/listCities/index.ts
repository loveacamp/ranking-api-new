import { CityRepository } from "../../repositories/implementations/CityRepository";
import { ListCitiesController } from "./ListCitiesController";
import { ListCitiesUseCase } from "./ListCitiesUseCase";

export default (): ListCitiesController => {
    const cityRepository = new CityRepository();

    const listCitiesUseCase = new ListCitiesUseCase(cityRepository);

    const listCitiesController = new ListCitiesController(listCitiesUseCase);

    return listCitiesController;
};
