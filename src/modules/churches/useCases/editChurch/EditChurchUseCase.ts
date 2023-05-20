import { ICreateChurchDTO } from "../../../dtos/ICreateChurchDTO";
import { Church } from "../../entities/Church";
import { IChurchRepository } from "../../repositories/IChurchRepository";

class EditChurchUseCase {
    constructor(private churchReposiotry: IChurchRepository) {
        //
    }

    async execute({ name, id }: ICreateChurchDTO): Promise<Church> {
        const church: Church = await this.churchReposiotry.edit({ name, id });

        return church;
    }
}

export { EditChurchUseCase };
