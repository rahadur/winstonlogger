import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  level: string;

  @Column({ nullable: true })
  context: string;

  @Column()
  message: string;

  @Column({ nullable: true })
  payload: string;

  @Column({ nullable: true })
  stack: string;

  @Column()
  timestamp: string;
}
