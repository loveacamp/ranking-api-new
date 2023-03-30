import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

import { Base } from "../../bases/entities/Base";
import { State } from "./State";

@Entity("cities")
class City {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => State, (state) => state.cities)
    state: State;

    @OneToMany(() => Base, (base) => base.city)
    base: Base;
}

export { City };
