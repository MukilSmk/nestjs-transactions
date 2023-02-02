import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose';

export type TransactionDocument  =  Transaction  & Document
@Schema()
export class Transaction{
    @Prop()
    name: string;

    @Prop()
    birthday: Date;

    @Prop()
    createdAt: Date;
}


export const TransactionSchema = SchemaFactory.createForClass(Transaction)