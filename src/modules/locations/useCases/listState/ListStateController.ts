import { Request, Response } from "express";

import { ListstatesUseCase } from "./ListStatesUseCase";

class ListStateController {
    constructor(private listStateUseCase: ListstatesUseCase) {
        //
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const states = await this.listStateUseCase.execute();

        return response.json(states);
    }
}

export { ListStateController };
