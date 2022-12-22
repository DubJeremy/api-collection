import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cards {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cardId: string;

    @Column()
    wanted: boolean;

    @Column()
    preferred: boolean;
}
