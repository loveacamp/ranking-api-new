import { ICreateChurchDTO } from "../../../dtos/ICreateChurchDTO";
import { Church } from "../../entities/Church";
import { IChurchRepository } from "../IChurchRepository";

class ChurchRepository implements IChurchRepository {
    list(): Promise<Church> {
        throw new Error("Method not implemented.");
    }
    create(church: ICreateChurchDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export { ChurchRepository };
