import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnCreatedAtInBasesRankingsTable1683466610209
    // eslint-disable-next-line prettier/prettier
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "bases_rankings_rankings",
            new TableColumn({
                name: "createdAt",
                type: "timestamp",
                default: "now()",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("bases_rankings_rankings", "createdAt");
    }
}
