import { Body, Controller, Post, Get, Query, Param, Put, Delete } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';


@Controller('department')
export class DepartmentController {
    
    constructor(private departmentService: DepartmentService) {}
    @Post()
        create(@Body() createDepartmentDto: CreateDepartmentDto) {
        return this.departmentService.createDepartment(createDepartmentDto);
    }

    @Get()
    findAll() {
        return this.departmentService.getAllDepartment();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.departmentService.getDepartment(id);
    }
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.departmentService.deleteDepartment(id);
    }
    
    @Put(':id/add/:employee')
    addEmployee(@Param('id') depId: string, @Param('employee') empId: string) {
        return this.departmentService.addEmployee(depId, empId);        
    }

    @Delete(':id/add/:employee')
    removeEmployee(@Param('id') depId: string, @Param('employee') empId: string) {
        return this.departmentService.removeEmployee(depId, empId);        
    }
}
