import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from 'src/employee/employee.entity';
import { DepartmentController } from './department.controller';
import { Department } from './department.entity';
import { DepartmentService } from './department.service';

@Module({
  controllers: [DepartmentController],
  providers: [DepartmentService],
  imports: [TypeOrmModule.forFeature([Department, Employee])],
  
})
export class DepartmentModule {}
