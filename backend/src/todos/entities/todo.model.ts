import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TodoSQLModel {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
}
