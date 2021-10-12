import { Employee } from 'src/employee/employee.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';



@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;  

  @Column({default: 0})
  count: number;

  @CreateDateColumn()
  creatData: Date;

  @OneToMany(() => Employee, employee => employee.department, )
  employee: Employee[];
}
