interface ICreateBaseDTO {
    id?: number;
    name: string;
    term: boolean;
    churchId: number;
    cityId: number;
}

type IEditBaseDTO = Omit<NonNullable<ICreateBaseDTO>, "term">;

export { ICreateBaseDTO, IEditBaseDTO };
