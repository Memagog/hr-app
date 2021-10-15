import { Body, Controller, Delete, Get, Param, Post, UsePipes } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeService } from './employee.service';
import { ValidationPipe } from './../pipes/validation.pipes';
import { FindEmployeeDTO } from './dto/find-employee.dto';

@Controller('employee')
export class EmployeeController {    
  constructor(private empService: EmployeeService) {}

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() CreateEmployeeDto: CreateEmployeeDto) {
    return  this.empService.createEmployee(CreateEmployeeDto);
  }

  @Get()
  findAll() {
    return this.empService.getAllEmployee();
  }

  @Get(':id')
  findOne(@Param('id') id: FindEmployeeDTO) {
    return this.empService.getOne(id);
  }

  @Get('filter/:name')
  findByName(@Param('name') name: string) {
    return this.empService.findByName(name);
  }

  @Delete(':id')
  delete(@Param('id') id: FindEmployeeDTO) {
    return this.empService.deleteEmployee(id);
  }    
}
