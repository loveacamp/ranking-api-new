import {
    Column,
    Entity,
    PrimaryColumn,
    CreateDateColumn,
    ManyToOne,
    ManyToMany,
    JoinTable,
} from "typeorm";

import { Church } from "../../churches/entities/Church";
import { City } from "../../locations/entities/City";
import { Ranking } from "../../rankings/entities/Ranking";

@Entity("bases")
class Base {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    term: boolean;

    @ManyToOne(() => Church, (church) => church.base)
    church: Church;

    @ManyToOne(() => City, (city) => city.base)
    city: City;

    @ManyToMany(() => Ranking)
    @JoinTable()
    rankings: Ranking[];

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;
}

export { Base };
