import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("rankings")
class Ranking {
    @PrimaryColumn()
    id: number;

    @Column()
    score: number;

    @Column()
    description: string;

    @Column()
    type: string;

    @Column()
    expiredAt: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

export { Ranking };
