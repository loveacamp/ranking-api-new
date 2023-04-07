enum RankingType {
    "M" = "Mensal",
    "A" = "Anual",
}

interface ICreateRankingDTO {
    id?: number;
    score: number;
    description: string;
    type: RankingType;
    expiredAt?: Date;
}

export { ICreateRankingDTO, RankingType };
