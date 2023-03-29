import { Request, Response } from "express";

import { ListRankingUseCase } from "./ListRankingUseCase";

class ListRankingController {
    constructor(private listRankingUseCase: ListRankingUseCase) {
        //
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const rankings = await this.listRankingUseCase.execute();

        return response.json(rankings);
    }
}

export { ListRankingController };
