import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private empService: EmployeeService) {}

    @Post()
    create(@Body() CreateEmployeeDto: CreateEmployeeDto) {
        return  this.empService.createEmployee(CreateEmployeeDto);
    }

    @Get()
    findAll() {
        return this.empService.getAllEmployee();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.empService.getOne(id);
    }
    @Get('filter/:name')
    findByName(@Param('name') name: string) {
        return this.empService.findByName(name);
    }
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.empService.deleteEmployee(id);
    }   
    @Delete(':id')
    remove(@Param('id') id: string) {
        return `Removes a #${id} employee`;
    }
}
