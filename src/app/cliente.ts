import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class cliente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
}