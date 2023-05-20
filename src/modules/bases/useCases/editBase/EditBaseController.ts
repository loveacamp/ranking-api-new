import { Request, Response } from "express";

import { EditBaseUseCase } from "./EditBaseUseCase";

class EditBaseController {
    constructor(private editBaseUseCase: EditBaseUseCase) {
        //
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { baseId } = request.params;
        const { name, cityId, churchId } = request.body;

        const base = await this.editBaseUseCase.execute({
            id: +baseId,
            churchId,
            cityId,
            name,
        });

        delete base.city;
        delete base.church;

        return response.json(base);
    }
}

export { EditBaseController };
