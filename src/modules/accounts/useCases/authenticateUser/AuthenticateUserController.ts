import { Request, Response } from "express";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
    constructor(private createUserUseCase: AuthenticateUserUseCase) {
        //
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { password, email } = request.body;

        const token = await this.createUserUseCase.execute({ email, password });

        return response.json(token);
    }
}

export { AuthenticateUserController };
