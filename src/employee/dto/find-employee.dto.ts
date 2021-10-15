import { IsNotEmpty, IsNumberString } from "class-validator";
export class FindEmployeeDTO {
    @IsNumberString()
    @IsNotEmpty()
    readonly id: number;  
}
