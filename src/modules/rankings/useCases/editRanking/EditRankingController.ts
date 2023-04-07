import { Request, Response } from "express";

import { EditRankingUseCase } from "./EditRankingUseCase";

class EditRankingController {
    constructor(private editRankingUseCase: EditRankingUseCase) {
        //
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { rankingId } = request.params;
        const { score, description } = request.body;

        await this.editRankingUseCase.execute({
            id: +rankingId,
            score,
            description,
        });

        return response.send();
    }
}

export { EditRankingController };
