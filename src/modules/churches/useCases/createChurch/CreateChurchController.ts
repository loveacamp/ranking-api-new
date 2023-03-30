import { Request, Response } from "express";

import { CreateChurchUseCase } from "./CreateChurchUseCase";

class CreateChurchController {
    constructor(private createChurchUseCase: CreateChurchUseCase) {
        //
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;

        await this.createChurchUseCase.execute({ name });

        return response.status(201).send();
    }
}

export { CreateChurchController };
