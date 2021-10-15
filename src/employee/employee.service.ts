import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { FindEmployeeDTO } from "./dto/find-employee.dto";
import { Employee } from "./employee.entity";

@Injectable()
export class EmployeeService {
  constructor(@InjectRepository(Employee) private empRepository: Repository<Employee>){}

  async createEmployee(dto:CreateEmployeeDto) {
    const employee = await this.empRepository.save(dto);
    return employee;
  }

  async getAllEmployee(): Promise<Employee[]>{        
    return await this.empRepository.find({ relations: ['department'] });        
  }

  async getOne(id: FindEmployeeDTO): Promise<Employee> {
    const allEmployee = await this.empRepository.findOne(id);
    return allEmployee;        
  } 

  async findByName(name: string) {
    const employee = await this.empRepository.find({
      where: [
        { name: name },
        { surname: name },
      ],
    })
    return employee;
  }
    
  async deleteEmployee(id: FindEmployeeDTO) {
    const employee = await this.empRepository.findOne(id);
    await this.empRepository.remove(employee);
    return `Delete employee by ${id}`
  }
}
