import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
} from "typeorm";

import { Collection } from "./collection.modele";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToOne((type) => Collection)
    @JoinColumn()
    collection: Collection;
}
