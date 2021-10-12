import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'src/employee/employee.entity';
import { Repository } from 'typeorm';
import { Department } from './department.entity';
import { CreateDepartmentDto } from './dto/create-department.dto';


@Injectable()
export class DepartmentService {
    constructor(
        @InjectRepository(Department) private depRepository: Repository<Department>, 
        @InjectRepository(Employee) private empRepository: Repository<Employee>,
    ){} 

    async createDepartment(dto: CreateDepartmentDto) {
        const department = await this.depRepository.save(dto);
        return department;
    }

    async getAllDepartment() {
        const departments = await this.depRepository.find();
        return departments;
    }

    async getDepartment(id: string){
        const departments = await this.depRepository.findOne(id, { relations: ['employee'] });
        return departments;
    }

    async addEmployee(depId: string, empId: string) {   
          
        const emp = await this.empRepository.findOne({ where: { id: empId }});     
        const department = await this.depRepository.findOne(depId,{ relations: ['employee'] }).then((dep) => {
            dep.employee.unshift(emp);
            return dep;
        });
        
        await this.depRepository.save(department);       
        
        const payload = {
            emp: emp,
            dep: department,
        }
        return payload;
    }

    async removeEmployee(depId: string, empId: string) {
        const emp = await this.empRepository.findOne({ where: { id: empId }});     
        const department = await this.depRepository.findOne(depId,{ relations: ['employee'] }).then((dep) => {
            let index = dep.employee.findIndex((e) => e.id === emp.id)
            if ( index >= 0 ) {
              dep.employee.splice(index, 1);
            }
            return dep;
        });
        
        await this.depRepository.save(department);       
        
        const payload = {
            emp: emp,
            dep: department,
        }
        return payload;
    }
}
