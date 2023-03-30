import { ICreateChurchDTO } from "../../../dtos/ICreateChurchDTO";
import { IChurchRepository } from "../../repositories/IChurchRepository";

class CreateChurchUseCase {
    constructor(private churchReposiotry: IChurchRepository) {
        //
    }

    async execute({ name }: ICreateChurchDTO): Promise<void> {
        await this.churchReposiotry.create({ name });
    }
}

export { CreateChurchUseCase };
