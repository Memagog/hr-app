import { Department } from "src/department/department.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string; 

  @Column()
  position: string;

  @Column()
  salary: number;

  @ManyToOne(()=> Department, department => department.employee)
   department: Department;
  
}