import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryColumn,
} from "typeorm";

import { Base } from "../../bases/entities/Base";

@Entity("churches")
class Church {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Base, (base) => base.church)
    base: Base[];

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;
}

export { Church };
