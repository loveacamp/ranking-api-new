import { Repository } from "typeorm";

import { AppDataSource } from "../../../../database";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = AppDataSource.getRepository(User);
    }

    async findById(id: number): Promise<User> {
        const user = await this.repository.findOne({
            where: { id },
        });

        return user;
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({
            where: { email },
        });

        return user;
    }

    async create({ name, email, password }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            email,
            password,
        });

        await this.repository.save(user);
    }
}

export { UserRepository };
