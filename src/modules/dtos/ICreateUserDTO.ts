interface ICreateUserDTO {
    id?: number;
    name: string;
    email: string;
    password: string;
    isAdmin?: boolean;
}

export { ICreateUserDTO };
