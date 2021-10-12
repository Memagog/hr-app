import { IsString, Length } from "class-validator";

export class CreateDepartmentDto {
  @IsString({ message: 'Name must be a STRING'})
  @Length(4, 20, { message: `Name length 4 - 20 chars`})
  name: string;   

  @IsString({ message: 'Description must be a STRING'})
  description: string;    

  creatData: Date;
    
  count: number;
}