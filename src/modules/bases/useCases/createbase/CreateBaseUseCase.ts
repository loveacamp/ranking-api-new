import { ICreateBaseDTO } from "../../../dtos/ICreateBaseDTO";
import { Base } from "../../entities/Base";
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
    }: ICreateBaseDTO): Promise<Base> {
        const base = await this.baseRepository.create({
            name,
            term,
            cityId,
            churchId,
        });

        return base;
    }
}

export { CreateBaseUseCase };
