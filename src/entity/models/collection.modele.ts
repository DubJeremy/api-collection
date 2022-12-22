import { Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

import { Cards } from "./cards.modele";

@Entity()
export class Collection {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany((type) => Cards)
    @JoinTable()
    cards: Cards[];
}
