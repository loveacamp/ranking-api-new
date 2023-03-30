import { IListScoresDTO } from "../../../dtos/IListScoresDTO";
import { IBaseRepository } from "../../repositories/IBaseRepository";

class ListScoresUseCase {
    constructor(private baseRepository: IBaseRepository) {
        //
    }

    async execute(): Promise<IListScoresDTO[]> {
        const scores: IListScoresDTO[] = await this.baseRepository.listScores();

        return scores;
    }
}

export { ListScoresUseCase };
