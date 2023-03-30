import { Request, Response } from "express";

import { CreateBaseUseCase } from "./CreateBaseUseCase";

export default class CreateBaseController {
    constructor(private createBaseUseCase: CreateBaseUseCase) {
        //
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, term, churchId, cityId } = request.body;

        await this.createBaseUseCase.execute({ name, term, cityId, churchId });

        return response.status(201).send();
    }
}
