import { lastDayOfMonth, lastDayOfYear } from "date-fns";

import { AppError } from "../../../../errors/AppErros";
import {
    ICreateRankingDTO,
    RankingType,
} from "../../../dtos/ICreateRankingDTO";
import { IRankingRepository } from "../../repositories/IRankingRepository";

class CreateRankingUseCase {
    constructor(private rankingRepository: IRankingRepository) {
        //
    }

    async execute({
        score,
        description,
        type,
    }: ICreateRankingDTO): Promise<void> {
        if (!(type in RankingType)) {
            throw new AppError("O tipo enviado para o ranking é inválido");
        }

        let expiredAt: Date;

        if (RankingType[type] === RankingType.M) {
            expiredAt = lastDayOfMonth(new Date());
        } else {
            expiredAt = lastDayOfYear(new Date());
        }

        await this.rankingRepository.create({
            score,
            description,
            type,
            expiredAt,
        });
    }
}

export { CreateRankingUseCase };
