import { Request, Response } from "express";

import { ListAllRankingUseCase } from "./ListAllRankingUseCase";

class ListAllRankingController {
    constructor(private listRankingUseCase: ListAllRankingUseCase) {
        //
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const rankings = await this.listRankingUseCase.execute();

        return response.json(rankings);
    }
}

export { ListAllRankingController };
