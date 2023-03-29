import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("churches")
class Church {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;
}

export { Church };
