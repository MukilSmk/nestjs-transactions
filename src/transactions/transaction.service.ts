import { Injectable } from "@nestjs/common";
import { Transaction } from "./schemas/transaction.schema";
import { TransactionRepository } from "./transaction.repository";

@Injectable()
export class TransactionsService {
    constructor(private readonly transactionsRepository: TransactionRepository) {}
    async getTransactions(): Promise<Transaction[]> {
        return this.transactionsRepository.find({})
    }


}