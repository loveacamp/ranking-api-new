import { lastDayOfMonth, lastDayOfYear } from "date-fns";

import { AppError } from "../../../../errors/AppErros";
import {
    ICreateRankingDTO,
    RankingType,
} from "../../../dtos/ICreateRankingDTO";
import { Ranking } from "../../entities/Ranking";
import { IRankingRepository } from "../../repositories/IRankingRepository";

class CreateRankingUseCase {
    constructor(private rankingRepository: IRankingRepository) {
        //
    }

    async execute({
        score,
        description,
        type,
    }: ICreateRankingDTO): Promise<Ranking> {
        if (!(type in RankingType)) {
            throw new AppError("O tipo enviado para o ranking é inválido");
        }

        let expiredAt: Date;

        if (RankingType[type] === RankingType.M) {
            expiredAt = lastDayOfMonth(new Date());
        } else {
            expiredAt = lastDayOfYear(new Date());
        }

        const ranking = await this.rankingRepository.create({
            score,
            description,
            type,
            expiredAt,
        });

        return ranking;
    }
}

export { CreateRankingUseCase };
