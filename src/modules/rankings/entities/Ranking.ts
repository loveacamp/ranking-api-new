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
    detailing: string;

    @Column()
    type: string;

    @Column()
    recurrence: string;

    @Column()
    status: boolean;

    @Column()
    expiredAt: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

export { Ranking };
