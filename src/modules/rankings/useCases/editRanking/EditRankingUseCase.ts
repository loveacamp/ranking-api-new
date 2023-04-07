import { IEditRankingDTO } from "../../../dtos/IEditRankingDTO";
import { IRankingRepository } from "../../repositories/IRankingRepository";

class EditRankingUseCase {
    constructor(private rankingRepository: IRankingRepository) {
        //
    }

    async execute({ description, score, id }: IEditRankingDTO): Promise<void> {
        await this.rankingRepository.edit({
            description,
            score,
            id,
        });
    }
}

export { EditRankingUseCase };
