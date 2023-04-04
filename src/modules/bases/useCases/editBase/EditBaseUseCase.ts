import { IEditBaseDTO } from "../../../dtos/ICreateBaseDTO";
import { IBaseRepository } from "../../repositories/IBaseRepository";

class EditBaseUseCase {
    constructor(private baseRepository: IBaseRepository) {
        //
    }

    async execute({ id, name, cityId, churchId }: IEditBaseDTO): Promise<void> {
        await this.baseRepository.edit({ id, name, churchId, cityId });
    }
}

export { EditBaseUseCase };
