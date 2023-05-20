import { IEditRankingDTO } from "../../../dtos/IEditRankingDTO";
import { Ranking } from "../../entities/Ranking";
import { IRankingRepository } from "../../repositories/IRankingRepository";

class EditRankingUseCase {
    constructor(private rankingRepository: IRankingRepository) {
        //
    }

    async execute({
        description,
        detailing,
        score,
        id,
    }: IEditRankingDTO): Promise<Ranking> {
        const ranking: Ranking = await this.rankingRepository.edit({
            description,
            detailing,
            score,
            id,
        });

        return ranking;
    }
}

export { EditRankingUseCase };
