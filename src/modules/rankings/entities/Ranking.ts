import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("rankings")
class Ranking {
    @PrimaryColumn()
    id: number;

    @Column()
    score: number;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;
}

export { Ranking };
