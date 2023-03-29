import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

import { City } from "./City";

@Entity("states")
class State {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => City, (city) => city.state)
    cities: City[];
}

export { State };
