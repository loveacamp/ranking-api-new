enum RankingType {
    "M" = "Mensal",
    "A" = "Anual",
}

enum RankingRecurrence {
    "M" = "1 vez ao mês",
    "A" = "1 vez ao ano",
    "N" = "Muitas vezes ao ano",
}

interface ICreateRankingDTO {
    id?: number;
    score: number;
    description: string;
    detailing?: string;
    recurrence: RankingRecurrence;
    type: RankingType;
    expiredAt?: Date;
}

export { ICreateRankingDTO, RankingType, RankingRecurrence };
