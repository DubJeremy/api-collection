import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    static findOne(arg0: { id: any }) {
        throw new Error("Method not implemented.");
    }
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column("simple-array")
    cards: string[];

    @Column("simple-array")
    wantedCards: string[];
}
