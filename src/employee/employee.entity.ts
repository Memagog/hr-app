import { Department } from "src/department/department.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
  
  @CreateDateColumn()
  data: Date;

  @ManyToOne(()=> Department, department => department.employee, { cascade: true, onDelete: "CASCADE" })
  department: Department;
  
}