import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterPrimaryKeyRankings1681257896705
    // eslint-disable-next-line prettier/prettier
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropPrimaryKey("bases_rankings_rankings");

        await queryRunner.addColumn(
            "bases_rankings_rankings",
            new TableColumn({
                name: "id",
                type: "int",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropPrimaryKey("bases_rankings_rankings");

        await queryRunner.dropColumn("bases_rankings_rankings", "id");

        await queryRunner.createPrimaryKey("bases_rankings_rankings", [
            "basesId",
            "rankingsId",
        ]);
    }
}
