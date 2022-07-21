import { MigrationInterface, QueryRunner } from "typeorm";

export class default1658273367579 implements MigrationInterface {
    name = 'default1658273367579'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "registro" ("id" SERIAL NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "telefone" text NOT NULL, "mensagem" text NOT NULL, "arquivo" text NOT NULL, "ip" text NOT NULL, "data" text NOT NULL, CONSTRAINT "PK_68115a72117fce58864e9bf6509" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "registro"`);
    }

}
