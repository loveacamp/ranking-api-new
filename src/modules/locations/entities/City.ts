import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

import { State } from "./State";

@Entity("cities")
class City {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => State, (state) => state.cities)
    state: State;
}

export { City };
