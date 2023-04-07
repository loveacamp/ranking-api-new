import { Request, Response } from "express";

import { CreateRankingUseCase } from "./CreateRankingUseCase";

class CreateRankingController {
    constructor(private createRankingUseCase: CreateRankingUseCase) {
        //
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { score, description, type } = request.body;

        const ranking = await this.createRankingUseCase.execute({
            score,
            description,
            type,
        });

        return response.status(201).json(ranking);
    }
}

export { CreateRankingController };
