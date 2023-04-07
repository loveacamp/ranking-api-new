import { ICreateRankingDTO } from "./ICreateRankingDTO";

type IEditRankingDTO = NonNullable<
    Omit<Omit<ICreateRankingDTO, "type">, "expiredAt">
>;

export { IEditRankingDTO };
