import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class CreateEmployeeDto {
  @IsString({ message: 'Name must be a STRING'})
  @Length(3, 20, { message: `Name length 3 - 20 chars`})
  name: string;

  @IsString({ message: 'Surname must be a STRING'})
  @Length(3, 20, { message: `Surname length 3 - 20 chars`})
  surname: string;

  @IsString({ message: 'Position must be a STRING'})
  @Length(3, 40, { message: `Position length 3 - 20 chars`})
  position: string;

  @IsNumber()
  @IsNotEmpty()
  salary: number;

  data: Date;    
}