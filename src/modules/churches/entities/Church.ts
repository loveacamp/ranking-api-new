import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryColumn,
    UpdateDateColumn,
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

    @UpdateDateColumn()
    updatedAt: Date;
}

export { Church };
