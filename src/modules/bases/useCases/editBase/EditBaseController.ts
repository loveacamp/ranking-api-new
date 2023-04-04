import { Request, Response } from "express";

import { EditBaseUseCase } from "./EditBaseUseCase";

class EditBaseController {
    constructor(private editBaseUseCase: EditBaseUseCase) {
        //
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { baseId } = request.params;
        const { name, cityId, churchId } = request.body;

        await this.editBaseUseCase.execute({
            id: +baseId,
            churchId,
            cityId,
            name,
        });

        return response.send();
    }
}

export { EditBaseController };
