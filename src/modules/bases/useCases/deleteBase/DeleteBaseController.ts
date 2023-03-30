import { Request, Response } from "express";

import { DeleteBaseUseCase } from "./DeleteBaseUseCase";

class DeleteBaseController {
    constructor(private deleteBaseUseCase: DeleteBaseUseCase) {
        //
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { baseId } = request.params;

        await this.deleteBaseUseCase.execute(+baseId);

        return response.status(204).send();
    }
}

export { DeleteBaseController };
