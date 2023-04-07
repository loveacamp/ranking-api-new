import { Request, Response } from "express";

import { EditChurchUseCase } from "./EditChurchUseCase";

class EditChurchController {
    constructor(private editChurchUseCase: EditChurchUseCase) {
        //
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { churchId } = request.params;
        const { name } = request.body;

        await this.editChurchUseCase.execute({ name, id: +churchId });

        return response.status(201).send();
    }
}

export { EditChurchController };
