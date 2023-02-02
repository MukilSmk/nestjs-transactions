import {  Controller, Get  } from '@nestjs/common';
import { Transaction } from './schemas/transaction.schema';

import { TransactionsService } from './transaction.service';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionsService: TransactionsService) {}


  @Get()
  async getTransactions(): Promise<Transaction[]> {
      return this.transactionsService.getTransactions();
  }

  }