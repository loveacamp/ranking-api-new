import { hash } from "bcrypt";

import { AppError } from "../../../../errors/AppErros";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {
        //
    }

    async execute({ name, email, password }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new AppError("Usuário ja cadastrado em nossa base de dados!");
        }

        const passwordHash = await hash(password, 8);

        await this.userRepository.create({
            name,
            email,
            password: passwordHash,
        });
    }
}

export { CreateUserUseCase };
