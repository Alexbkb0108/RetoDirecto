import { IsNumber, IsPositive, Min } from "class-validator";

export class inputDTO {
    @IsNumber()
    @IsPositive()
    @Min(1)
    num: number;
}