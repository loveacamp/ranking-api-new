import { endOfMonth, endOfYear, startOfMonth, startOfYear } from "date-fns";

import { AppError } from "../../../../../errors/AppErros";
import { IAddScoreDTO } from "../../../../dtos/IAddScoreDTO";
import { RankingRecurrence } from "../../../../dtos/ICreateRankingDTO";
import { Ranking } from "../../../../rankings/entities/Ranking";
import { IRankingRepository } from "../../../../rankings/repositories/IRankingRepository";
import { IBaseRepository } from "../../../repositories/IBaseRepository";

class AddScoreUseCase {
    constructor(
        private baseRepository: IBaseRepository,
        private rankingRepository: IRankingRepository
    ) {
        //
    }

    async execute({ baseId, rankingId }: IAddScoreDTO): Promise<void> {
        const ranking: Ranking = await this.rankingRepository.find(rankingId);

        const currentDate: Date = new Date();

        if (RankingRecurrence[ranking.recurrence] === RankingRecurrence.A) {
            const firstDateOfYear: Date = startOfYear(currentDate);
            const lastDateOfYear: Date = endOfYear(currentDate);

            const existScoreInDate = await this.baseRepository.existScoreInDate(
                firstDateOfYear,
                lastDateOfYear,
                baseId,
                rankingId
            );

            if (existScoreInDate)
                throw new AppError(
                    "Está base já está vinculada a este ranking de periodo anual."
                );
        }

        if (RankingRecurrence[ranking.recurrence] === RankingRecurrence.M) {
            const firstDateOfMonth: Date = startOfMonth(currentDate);
            const lastDateOfMonth: Date = endOfMonth(currentDate);

            const existScoreInDate = await this.baseRepository.existScoreInDate(
                firstDateOfMonth,
                lastDateOfMonth,
                baseId,
                rankingId
            );

            if (existScoreInDate)
                throw new AppError(
                    "Está base já está vinculada a este ranking mensal."
                );
        }

        await this.baseRepository.addScore({ baseId, rankingId });
    }
}

export { AddScoreUseCase };
