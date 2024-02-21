import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Expense {
    @Prop({required: true, unique: true})
    id: string;

    @Prop({required: true})
    name: string;

    @Prop()
    cost: number;
}


export const ExpenseSchema = SchemaFactory.createForClass(Expense)