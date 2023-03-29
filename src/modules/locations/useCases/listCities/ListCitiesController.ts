import { Request, Response } from "express";

import { ListCitiesUseCase } from "./ListCitiesUseCase";

class ListCitiesController {
    constructor(private listCitiesUseCase: ListCitiesUseCase) {
        //
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { state: stateIdString } = request.query;
        const stateId: number = +stateIdString || 1;

        const cities = await this.listCitiesUseCase.execute(stateId);

        return response.json(cities);
    }
}

export { ListCitiesController };
