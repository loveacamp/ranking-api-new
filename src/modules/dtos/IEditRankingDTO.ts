import { ICreateRankingDTO } from "./ICreateRankingDTO";

type IEditRankingDTO = NonNullable<
    Omit<Omit<Omit<ICreateRankingDTO, "type">, "expiredAt">, "recurrence">
>;

export { IEditRankingDTO };
