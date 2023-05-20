/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnRecurrenceInRanking1681257054260
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("rankings", new TableColumn({
            name: "recurrence",
            type: "char(1)",
            comment: "Quantidade de vezes que o ranking pode ser realizado por base/classe. " +
                "Sendo M (mensal) 1 vez por mês, A (anual) 1 vez por ano, N (recorrente) varios vezes por mês",
            default: "'A'",
        }));

        await queryRunner.changeColumn(
            "rankings",
            "recurrence",
            new TableColumn({
                name: "recurrence",
                type: "char(1)",
                comment: "Quantidade de vezes que o ranking pode ser realizado por base/classe. " +
                    "Sendo M (mensal) 1 vez por mês, A (anual) 1 vez por ano, N (recorrente) varios vezes por mês",
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("rankings", "recurrence");
    }
}
