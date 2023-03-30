import { IAddScoreDTO } from "../../../../dtos/IAddScoreDTO";
import { IBaseRepository } from "../../../repositories/IBaseRepository";

class AddScoreUseCase {
    constructor(private baseRepository: IBaseRepository) {
        //
    }

    async execute({ baseId, rankingId }: IAddScoreDTO): Promise<void> {
        await this.baseRepository.addScore({ baseId, rankingId });
    }
}

export { AddScoreUseCase };
