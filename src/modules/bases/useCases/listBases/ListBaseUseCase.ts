import { Base } from "../../entities/Base";
import { IBaseRepository } from "../../repositories/IBaseRepository";

class ListBaseUseCase {
    constructor(private baseRepository: IBaseRepository) {
        //
    }

    async execute(): Promise<Base[]> {
        const bases: Base[] = await this.baseRepository.list();

        return bases;
    }
}

export { ListBaseUseCase };
