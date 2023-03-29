import { ICreateRankingDTO } from "../../dtos/ICreateRankingDTO";
import { Ranking } from "../entities/Ranking";

interface IRankingRepository {
    create(ranking: ICreateRankingDTO): Promise<void>;
    list(): Promise<Ranking[]>;
}

export { IRankingRepository };
