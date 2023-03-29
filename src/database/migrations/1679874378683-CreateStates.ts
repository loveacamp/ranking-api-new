import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateStates1679874378683 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "states",
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
                ],
            })
        );

        await queryRunner.query(`
            INSERT INTO states (id, name) VALUES
                (1, 'Acre'),
                (2, 'Alagoas'),
                (3, 'Amazonas'),
                (4, 'Amapá'),
                (5, 'Bahia'),
                (6, 'Ceará'),
                (7, 'Distrito Federal'),
                (8, 'Espírito Santo'),
                (9, 'Goiás'),
                (10, 'Maranhão'),
                (11, 'Minas Gerais'),
                (12, 'Mato Grosso do Sul'),
                (13, 'Mato Grosso'),
                (14, 'Pará'),
                (15, 'Paraíba'),
                (16, 'Pernambuco'),
                (17, 'Piauí'),
                (18, 'Paraná'),
                (19, 'Rio de Janeiro'),
                (20, 'Rio Grande do Norte'),
                (21, 'Rondônia'),
                (22, 'Roraima'),
                (23, 'Rio Grande do Sul'),
                (24, 'Santa Catarina'),
                (25, 'Sergipe'),
                (26, 'São Paulo'),
                (27, 'Tocantins');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("states");
    }
}
