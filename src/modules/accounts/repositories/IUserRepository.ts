import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUserRepository {
    findById(id: number): Promise<User>;
    findByEmail(email: string): Promise<User>;
    create(user: ICreateUserDTO): Promise<void>;
}

export { IUserRepository };
