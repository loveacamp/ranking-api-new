import { Request, Response } from "express";

import { AddScoreUseCase } from "./AddScoreUseCase";

class AddScoreController {
    constructor(private addScoreUseCase: AddScoreUseCase) {
        //
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { baseId, rankingId } = request.body;

        await this.addScoreUseCase.execute({
            baseId: +baseId,
            rankingId: +rankingId,
        });

        return response.send();
    }
}

export { AddScoreController };
