import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Mongoose } from "mongoose";
import { Transaction, TransactionSchema } from "./schemas/transaction.schema";

@Module({
    imports : [MongooseModule.forFeature([{name: Transaction.name, schema: TransactionSchema}])]
})

export class TransactionModule {

}