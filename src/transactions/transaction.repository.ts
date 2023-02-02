import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model,FilterQuery } from "mongoose";
import { Transaction, TransactionDocument } from "./schemas/transaction.schema";

@Injectable()
export class TransactionRepository{
    constructor(@InjectModel(Transaction.name) private transactionModel: Model<TransactionDocument>){
       
    }
    async findOne(userFilterQuery:FilterQuery<Transaction>): Promise<Transaction>{
        return this.transactionModel.findOne(userFilterQuery)
    }

    async find(userFilterQuery:FilterQuery<Transaction>): Promise<Transaction[]>{
        return this.transactionModel.find(userFilterQuery).exec()
    }
}