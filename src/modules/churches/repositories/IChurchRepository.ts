import { ICreateChurchDTO } from "../../dtos/ICreateChurchDTO";
import { Church } from "../entities/Church";

interface IChurchRepository {
    list(): Promise<Church[]>;
    create(church: ICreateChurchDTO): Promise<void>;
}

export { IChurchRepository };
