import { Request, Response } from "express";

import { ListBaseUseCase } from "./ListBaseUseCase";

class ListBaseController {
    constructor(private listBaseUseCase: ListBaseUseCase) {
        //
    }

    async handle(request: Request, response: Response) {
        const bases = await this.listBaseUseCase.execute();

        return response.json(bases);
    }
}

export { ListBaseController };
