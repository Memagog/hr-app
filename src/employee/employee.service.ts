import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { Employee } from "./employee.entity";

@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(Employee) private empRepository: Repository<Employee>){}

    async createEmployee(dto:CreateEmployeeDto) {
        const employee = await this.empRepository.save(dto);
        return employee;
    }

    async getAllEmployee(): Promise<Employee[]>{        
        return await this.empRepository.find();        
    }

    async getOne(_id: string): Promise<Employee> {
        const allEmployee = await this.empRepository.findOne(_id);
        return allEmployee;        
    }
}
