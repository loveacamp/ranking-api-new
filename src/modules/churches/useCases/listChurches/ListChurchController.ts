import { Request, Response } from "express";

import { ListChurchesUseCase } from "./ListChurchesUseCase";

class ListChurchController {
    constructor(private listChurchUseCase: ListChurchesUseCase) {
        //
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const churches = await this.listChurchUseCase.execute();

        return response.json(churches);
    }
}

export { ListChurchController };
