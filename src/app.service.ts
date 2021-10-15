import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Department } from "./department/department.entity";
@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Department) private depRepository: Repository<Department>,    
  ){}

  async getDashboard() {    
    const departments = await this.depRepository.find({relations: ['employee']}).then(deps => {
      return deps.sort((a, b) => b.employee.length - a.employee.length).filter((e, i) => i < 5);
    });
    let res = departments.map(e => {
      e.employee = e.employee.slice(0, 5);
      return e;
    });
    return res
  }
}
