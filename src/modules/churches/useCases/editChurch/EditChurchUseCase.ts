import { ICreateChurchDTO } from "../../../dtos/ICreateChurchDTO";
import { IChurchRepository } from "../../repositories/IChurchRepository";

class EditChurchUseCase {
    constructor(private churchReposiotry: IChurchRepository) {
        //
    }

    async execute({ name, id }: ICreateChurchDTO): Promise<void> {
        await this.churchReposiotry.edit({ name, id });
    }
}

export { EditChurchUseCase };
