import { Church } from "../../entities/Church";
import { IChurchRepository } from "../../repositories/IChurchRepository";

class ListChurchesUseCase {
    constructor(private churchRepository: IChurchRepository) {
        //
    }

    async execute(): Promise<Church[]> {
        const churches: Church[] = await this.churchRepository.list();

        return churches;
    }
}

export { ListChurchesUseCase };
