import { IEditBaseDTO } from "../../../dtos/ICreateBaseDTO";
import { Base } from "../../entities/Base";
import { IBaseRepository } from "../../repositories/IBaseRepository";

class EditBaseUseCase {
    constructor(private baseRepository: IBaseRepository) {
        //
    }

    async execute({ id, name, cityId, churchId }: IEditBaseDTO): Promise<Base> {
        const base: Base = await this.baseRepository.edit({
            id,
            name,
            churchId,
            cityId,
        });

        return base;
    }
}

export { EditBaseUseCase };
