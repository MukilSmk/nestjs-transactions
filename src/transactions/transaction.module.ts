import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Mongoose } from "mongoose";
import { Transaction, TransactionSchema } from "./schemas/transaction.schema";
import { TransactionController } from "./transaction.controller";
import { TransactionRepository } from "./transaction.repository";
import { TransactionsService } from "./transaction.service";

@Module({
    imports : [MongooseModule.forFeature([{name: Transaction.name, schema: TransactionSchema}])],
    controllers: [TransactionController],
    providers:[TransactionsService, TransactionRepository]
})

export class TransactionModule {

}