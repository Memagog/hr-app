import { IsNotEmpty, IsNumberString, IsString, Length } from "class-validator";
export class FindDepartmentDTO {
    @IsNumberString()
    @IsNotEmpty()
    readonly id: number;  
}
