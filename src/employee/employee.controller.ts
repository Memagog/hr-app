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
    @Get(':name')
    findByName(@Param('name') name: []) {
        return `Return list with chose name`
    }
    // @Put(':id')
    // update(@Param('id') id: string, @Body() updateEmpDto: UpdateEmpDto) {
    //     return `Updates a #${id} employee`;
    // }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `Removes a #${id} employee`;
    }
}
