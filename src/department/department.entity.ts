import { Employee } from 'src/employee/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';



@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;  

  @OneToMany(() => Employee, employee => employee.department)
  employee: Employee[];
}
