import {MigrationInterface, QueryRunner} from "typeorm";

export class user1585562068808 implements MigrationInterface {
    name = 'user1585562068808'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "location" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "longitude" character varying NOT NULL, "latitude" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "cinema" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "capacity" integer NOT NULL, "isVerified" boolean NOT NULL, "isDeleted" boolean NOT NULL, "averageRating" integer NOT NULL, "status" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "locationId" uuid, "userId" uuid, CONSTRAINT "REL_5b08923372780a5660ae62518c" UNIQUE ("locationId"), CONSTRAINT "REL_e5b7bde482bfb50780e08f44ad" UNIQUE ("userId"), CONSTRAINT "PK_65912fd9911f64e56eadf654912" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "cinema_rating" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cinemaId" character varying NOT NULL, "stars" character varying NOT NULL, "feedback" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userIdId" uuid, CONSTRAINT "PK_9c9b01e57c0ab871523568c3279" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "cinema_room" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "lastName" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "cinemaIdId" uuid, CONSTRAINT "PK_6d3727c589945ac1ea9ec8b1634" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "movie" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "length" character varying NOT NULL, "dateOfRelease" text NOT NULL, "status" character varying NOT NULL, "price" character varying NOT NULL, "imageUrl" character varying NOT NULL, "discount" character varying NOT NULL, "type" character varying NOT NULL, "traillerUrl" character varying NOT NULL, "actors" text NOT NULL, "summary" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_aed762eecb280792995e9b44fb1" UNIQUE ("dateOfRelease"), CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "notification" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL, "message" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userIdId" uuid, CONSTRAINT "PK_705b6c7cdf9b2c2ff7ac7872cb7" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "payment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "amount" character varying NOT NULL, "paymentType" character varying NOT NULL, "deductAmmount" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userIdId" uuid, CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "role" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "privilledges" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "seat" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "class" character varying NOT NULL, "isBooked" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "roomIdId" uuid, CONSTRAINT "PK_4e72ae40c3fbd7711ccb380ac17" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "ticket" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" TIMESTAMP NOT NULL, "time" character varying NOT NULL, "isValid" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "movieIdId" uuid, "paymentIdId" uuid, "seatIdId" uuid, CONSTRAINT "REL_fe9292fc9327440ca395418df6" UNIQUE ("movieIdId"), CONSTRAINT "REL_5d6c3d5e95cceaa9542b1f25d7" UNIQUE ("paymentIdId"), CONSTRAINT "REL_e5a161e764a5d2231c84b8e206" UNIQUE ("seatIdId"), CONSTRAINT "PK_d9a0835407701eb86f874474b7c" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "wish_list" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" text NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_716e1c69526767989a9e39ec4a4" UNIQUE ("email"), CONSTRAINT "PK_f8e27bbb59891db7cd9f920c272" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "firstName"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastName"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "phone" text`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_8e1f623798118e629b46a9e6299" UNIQUE ("phone")`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "verificationCode" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "gender" text NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "dateOfBirth" date NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "isVerified" boolean NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "isDeleted" boolean NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "email" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "cinema" ADD CONSTRAINT "FK_5b08923372780a5660ae62518ca" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "cinema" ADD CONSTRAINT "FK_e5b7bde482bfb50780e08f44ad9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "cinema_rating" ADD CONSTRAINT "FK_6483055ca2f1377434ce907232d" FOREIGN KEY ("userIdId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "cinema_room" ADD CONSTRAINT "FK_e39bb61d63fe79490e72e96878d" FOREIGN KEY ("cinemaIdId") REFERENCES "cinema"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "notification" ADD CONSTRAINT "FK_12b3b30c2d4e21dc186cff3afaa" FOREIGN KEY ("userIdId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "FK_3dd21505bf38aeefe2e7fe6d404" FOREIGN KEY ("userIdId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "seat" ADD CONSTRAINT "FK_7be6390c03f9315007b78ace48b" FOREIGN KEY ("roomIdId") REFERENCES "cinema_room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "ticket" ADD CONSTRAINT "FK_fe9292fc9327440ca395418df6b" FOREIGN KEY ("movieIdId") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "ticket" ADD CONSTRAINT "FK_5d6c3d5e95cceaa9542b1f25d7c" FOREIGN KEY ("paymentIdId") REFERENCES "payment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "ticket" ADD CONSTRAINT "FK_e5a161e764a5d2231c84b8e206e" FOREIGN KEY ("seatIdId") REFERENCES "seat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ticket" DROP CONSTRAINT "FK_e5a161e764a5d2231c84b8e206e"`, undefined);
        await queryRunner.query(`ALTER TABLE "ticket" DROP CONSTRAINT "FK_5d6c3d5e95cceaa9542b1f25d7c"`, undefined);
        await queryRunner.query(`ALTER TABLE "ticket" DROP CONSTRAINT "FK_fe9292fc9327440ca395418df6b"`, undefined);
        await queryRunner.query(`ALTER TABLE "seat" DROP CONSTRAINT "FK_7be6390c03f9315007b78ace48b"`, undefined);
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "FK_3dd21505bf38aeefe2e7fe6d404"`, undefined);
        await queryRunner.query(`ALTER TABLE "notification" DROP CONSTRAINT "FK_12b3b30c2d4e21dc186cff3afaa"`, undefined);
        await queryRunner.query(`ALTER TABLE "cinema_room" DROP CONSTRAINT "FK_e39bb61d63fe79490e72e96878d"`, undefined);
        await queryRunner.query(`ALTER TABLE "cinema_rating" DROP CONSTRAINT "FK_6483055ca2f1377434ce907232d"`, undefined);
        await queryRunner.query(`ALTER TABLE "cinema" DROP CONSTRAINT "FK_e5b7bde482bfb50780e08f44ad9"`, undefined);
        await queryRunner.query(`ALTER TABLE "cinema" DROP CONSTRAINT "FK_5b08923372780a5660ae62518ca"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "email" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isDeleted"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isVerified"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "dateOfBirth"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "gender"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "verificationCode"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_8e1f623798118e629b46a9e6299"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "lastName" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "firstName" character varying NOT NULL`, undefined);
        await queryRunner.query(`DROP TABLE "wish_list"`, undefined);
        await queryRunner.query(`DROP TABLE "ticket"`, undefined);
        await queryRunner.query(`DROP TABLE "seat"`, undefined);
        await queryRunner.query(`DROP TABLE "role"`, undefined);
        await queryRunner.query(`DROP TABLE "payment"`, undefined);
        await queryRunner.query(`DROP TABLE "notification"`, undefined);
        await queryRunner.query(`DROP TABLE "movie"`, undefined);
        await queryRunner.query(`DROP TABLE "cinema_room"`, undefined);
        await queryRunner.query(`DROP TABLE "cinema_rating"`, undefined);
        await queryRunner.query(`DROP TABLE "cinema"`, undefined);
        await queryRunner.query(`DROP TABLE "location"`, undefined);
    }

}
