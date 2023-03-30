import { IBaseRepository } from "../../repositories/IBaseRepository";

class DeleteBaseUseCase {
    constructor(private baseRepository: IBaseRepository) {
        //
    }

    async execute(baseId: number): Promise<void> {
        await this.baseRepository.delete(baseId);
    }
}

export { DeleteBaseUseCase };
