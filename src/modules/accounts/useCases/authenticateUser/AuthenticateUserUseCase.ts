import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { AppError } from "../../../../errors/AppErros";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

class AuthenticateUserUseCase {
    constructor(private userRepository: IUserRepository) {
        //
    }

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new AppError("Email ou senha incorreta!");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError("Email ou senha incorreta!");
        }

        const token = sign({}, process.env.JWT_TOKEN, {
            subject: String(user.id),
            expiresIn: "1d",
        });

        return {
            user: {
                name: user.name,
                email: user.email,
            },
            token,
        };
    }
}

export { AuthenticateUserUseCase };
