import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ScheduleModule } from "@nestjs/schedule";
import { Mongoose } from "mongoose";
import { CronService } from "./cron.service";
import { Transaction, TransactionSchema } from "./schemas/transaction.schema";
import { TransactionController } from "./transaction.controller";
import { TransactionRepository } from "./transaction.repository";
import { TransactionsService } from "./transaction.service";

@Module({
    imports : [MongooseModule.forFeature([{name: Transaction.name, schema: TransactionSchema}]), ScheduleModule.forRoot()],
    controllers: [TransactionController],
    providers:[TransactionsService, TransactionRepository, CronService]
})

export class TransactionModule {

}