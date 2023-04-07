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

    async create({ name }: ICreateChurchDTO): Promise<Church> {
        const insertResult = await this.repository
            .createQueryBuilder()
            .insert()
            .values({ name })
            .returning(["id", "createdAt", "updatedAt"])
            .execute();

        const church = new Church();
        church.id = insertResult.identifiers[0].id;
        church.name = name;
        church.createdAt = insertResult.raw[0].createdAt;
        church.updatedAt = insertResult.raw[0].updatedAt;

        return church;
    }

    async edit({ name, id }: ICreateChurchDTO): Promise<void> {
        await this.repository.update(id, { name });
    }
}

export { ChurchRepository };
