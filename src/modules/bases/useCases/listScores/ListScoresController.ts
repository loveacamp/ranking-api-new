import { Request, Response } from "express";

import { ListScoresUseCase } from "./ListScoresUseCase";

class ListScoresController {
    constructor(private listScoresUseCase: ListScoresUseCase) {
        //
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const scores = await this.listScoresUseCase.execute();

        return response.json(scores);
    }
}

export { ListScoresController };
