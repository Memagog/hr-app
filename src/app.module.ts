import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { DepartmentModule } from './department/department.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee/employee.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Employee],
      synchronize: true,
      autoLoadEntities: true,
    }),
    EmployeeModule, DepartmentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
