import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('info')
export class Information {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column()
  information: string;
}
