import { Request, Response } from "express";

import { InactiveRankingUseCase } from "./InactiveRankingUseCase";

class InactiveRankingController {
    constructor(private inactiveRankingUseCase: InactiveRankingUseCase) {
        //
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { rankingId } = request.params;

        await this.inactiveRankingUseCase.execute(+rankingId);

        return response.send();
    }
}

export { InactiveRankingController };
