import { ICreateChurchDTO } from "../../../dtos/ICreateChurchDTO";
import { Church } from "../../entities/Church";
import { IChurchRepository } from "../../repositories/IChurchRepository";

class CreateChurchUseCase {
    constructor(private churchReposiotry: IChurchRepository) {
        //
    }

    async execute({ name }: ICreateChurchDTO): Promise<Church> {
        const church = await this.churchReposiotry.create({ name });

        return church;
    }
}

export { CreateChurchUseCase };
