import { Request, Response } from "express";

import { EditRankingUseCase } from "./EditRankingUseCase";

class EditRankingController {
    constructor(private editRankingUseCase: EditRankingUseCase) {
        //
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { rankingId } = request.params;
        const { score, description, detailing } = request.body;

        const ranking = await this.editRankingUseCase.execute({
            id: +rankingId,
            score,
            description,
            detailing,
        });

        return response.json(ranking);
    }
}

export { EditRankingController };
