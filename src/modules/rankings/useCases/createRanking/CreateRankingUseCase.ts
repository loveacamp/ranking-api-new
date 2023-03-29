import { ICreateRankingDTO } from "../../../dtos/ICreateRankingDTO";
import { IRankingRepository } from "../../repositories/IRankingRepository";

class CreateRankingUseCase {
    constructor(private rankingRepository: IRankingRepository) {
        //
    }

    async execute({ score, description }: ICreateRankingDTO): Promise<void> {
        await this.rankingRepository.create({ score, description });
    }
}

export { CreateRankingUseCase };
