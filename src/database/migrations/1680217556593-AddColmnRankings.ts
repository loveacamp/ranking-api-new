import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColmnRankings1680217556593 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns("rankings", [
            new TableColumn({
                name: "type",
                type: "char(1)",
                comment:
                    "Tipo do ranking, sendo 'A' para anual e 'M' para mensal.",
            }),
            new TableColumn({
                name: "expiredAt",
                type: "date",
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns("rankings", ["type", "expiredAt"]);
    }
}
