import { ICreateRankingDTO } from "../../dtos/ICreateRankingDTO";
import { Ranking } from "../entities/Ranking";

type IRankingRepositorieFull = Required<ICreateRankingDTO>;

interface IRankingRepository {
    create(ranking: IRankingRepositorieFull): Promise<void>;
    list(): Promise<Ranking[]>;
    listAll(): Promise<Ranking[]>;
    inactive(id: number): Promise<void>;
}

export { IRankingRepository };
