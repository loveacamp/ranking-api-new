import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppErros";
import { UserRepository } from "../modules/accounts/repositories/implementations/UserRepository";

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token inexistênte", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub } = verify(token, "bb3b3b09e7c48543ca9dec2d99b62e7a");

        const userId: number = +sub;

        const userRepository = new UserRepository();

        const user = await userRepository.findById(userId);

        if (!user) {
            throw new AppError("Usuário não existe!", 401);
        }

        request.user = {
            id: userId,
        };

        next();
    } catch (error) {
        throw new AppError("Token Inválido", 500);
    }
}
