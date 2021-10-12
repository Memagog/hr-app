import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';
import { Department } from 'src/department/department.entity';
@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService],
  imports: [TypeOrmModule.forFeature([Employee, Department])]
})

export class EmployeeModule {}
