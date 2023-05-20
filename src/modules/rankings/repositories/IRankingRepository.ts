import { ICreateRankingDTO } from "../../dtos/ICreateRankingDTO";
import { IEditRankingDTO } from "../../dtos/IEditRankingDTO";
import { Ranking } from "../entities/Ranking";

type IRankingRepositorieFull = Required<Omit<ICreateRankingDTO, "id">>;

interface IRankingRepository {
    find(id: number): Promise<Ranking>;
    create(ranking: IRankingRepositorieFull): Promise<Ranking>;
    edit(ranking: IEditRankingDTO): Promise<Ranking>;
    list(): Promise<Ranking[]>;
    listAll(): Promise<Ranking[]>;
    inactive(id: number): Promise<void>;
}

export { IRankingRepository };
