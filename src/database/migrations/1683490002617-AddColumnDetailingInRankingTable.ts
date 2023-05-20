import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnDetailingInRankingTable1683490002617
    // eslint-disable-next-line prettier/prettier
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "rankings",
            new TableColumn({
                name: "detailing",
                type: "varchar",
                isNullable: true,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("rankings", "detailing");
    }
}
