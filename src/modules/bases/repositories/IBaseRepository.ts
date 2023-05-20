import { IAddScoreDTO } from "../../dtos/IAddScoreDTO";
import { ICreateBaseDTO, IEditBaseDTO } from "../../dtos/ICreateBaseDTO";
import { IListScoresDTO } from "../../dtos/IListScoresDTO";
import { Base } from "../entities/Base";

interface IBaseRepository {
    list(): Promise<Base[]>;
    create(base: ICreateBaseDTO): Promise<Base>;
    edit(base: IEditBaseDTO): Promise<Base>;
    delete(baseId: number): Promise<void>;
    addScore({ baseId, rankingId }: IAddScoreDTO): Promise<void>;
    listScores(): Promise<IListScoresDTO[]>;
    existScoreInDate(
        initialDate: Date,
        finalDate: Date,
        baseId: number,
        rankingId: number
    ): Promise<boolean>;
}

export { IBaseRepository };
