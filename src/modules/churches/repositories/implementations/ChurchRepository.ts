import { Repository } from "typeorm";

import { AppDataSource } from "../../../../database";
import { ICreateChurchDTO } from "../../../dtos/ICreateChurchDTO";
import { Church } from "../../entities/Church";
import { IChurchRepository } from "../IChurchRepository";

class ChurchRepository implements IChurchRepository {
    repository: Repository<Church>;

    constructor() {
        this.repository = AppDataSource.getRepository(Church);
    }

    async list(): Promise<Church[]> {
        const churches = await this.repository.find();

        return churches;
    }

    async create({ name }: ICreateChurchDTO): Promise<void> {
        const church = this.repository.create({ name });

        await this.repository.save(church);
    }
}

export { ChurchRepository };
