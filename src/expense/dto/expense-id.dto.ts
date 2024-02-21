import { IsMongoId } from "class-validator";



export class ExpenseIdParams{
    @IsMongoId()
    id: string;
}

