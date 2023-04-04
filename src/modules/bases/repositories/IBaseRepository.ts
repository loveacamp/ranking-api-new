import { IAddScoreDTO } from "../../dtos/IAddScoreDTO";
import { ICreateBaseDTO, IEditBaseDTO } from "../../dtos/ICreateBaseDTO";
import { IListScoresDTO } from "../../dtos/IListScoresDTO";
import { Base } from "../entities/Base";

interface IBaseRepository {
    list(): Promise<Base[]>;
    create(base: ICreateBaseDTO): Promise<void>;
    edit(base: IEditBaseDTO): Promise<void>;
    delete(baseId: number): Promise<void>;
    addScore({ baseId, rankingId }: IAddScoreDTO): Promise<void>;
    listScores(): Promise<IListScoresDTO[]>;
}

export { IBaseRepository };
