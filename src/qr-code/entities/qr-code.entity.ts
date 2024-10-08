import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


export class QrCode {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    challanage: string;

}
