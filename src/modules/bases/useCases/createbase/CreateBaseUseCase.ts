import { ICreateBaseDTO } from "../../../dtos/ICreateBaseDTO";
import { IBaseRepository } from "../../repositories/IBaseRepository";

class CreateBaseUseCase {
    constructor(private baseRepository: IBaseRepository) {
        //
    }

    async execute({
        name,
        term,
        cityId,
        churchId,
    }: ICreateBaseDTO): Promise<void> {
        await this.baseRepository.create({
            name,
            term,
            cityId,
            churchId,
        });
    }
}

export { CreateBaseUseCase };
