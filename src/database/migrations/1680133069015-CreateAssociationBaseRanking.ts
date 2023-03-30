import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAssociationBaseRanking1680133069015
    // eslint-disable-next-line prettier/prettier
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "bases_rankings_rankings",
                columns: [
                    {
                        name: "basesId",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "rankingsId",
                        type: "int",
                        isPrimary: true,
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ["basesId"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "bases",
                    },
                    {
                        columnNames: ["rankingsId"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "rankings",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("bases_rankings_rankings");
    }
}
