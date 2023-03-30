import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class CreateBases1680054732329 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "bases",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "term",
                        type: "boolean",
                    },
                    {
                        name: "churchId",
                        type: "int",
                    },
                    {
                        name: "cityId",
                        type: "int",
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updatedAt",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );

        await queryRunner.createForeignKey(
            "bases",
            new TableForeignKey({
                columnNames: ["churchId"],
                referencedColumnNames: ["id"],
                referencedTableName: "churches",
            })
        );

        await queryRunner.createForeignKey(
            "bases",
            new TableForeignKey({
                columnNames: ["cityId"],
                referencedColumnNames: ["id"],
                referencedTableName: "cities",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("bases");
    }
}
