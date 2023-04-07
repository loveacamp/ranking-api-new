import { ICreateRankingDTO } from "../../dtos/ICreateRankingDTO";
import { IEditRankingDTO } from "../../dtos/IEditRankingDTO";
import { Ranking } from "../entities/Ranking";

type IRankingRepositorieFull = Required<Omit<ICreateRankingDTO, "id">>;

interface IRankingRepository {
    create(ranking: IRankingRepositorieFull): Promise<Ranking>;
    edit(ranking: IEditRankingDTO): Promise<void>;
    list(): Promise<Ranking[]>;
    listAll(): Promise<Ranking[]>;
    inactive(id: number): Promise<void>;
}

export { IRankingRepository };
