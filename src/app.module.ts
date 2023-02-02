import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionModule } from './transactions/transaction.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ ConfigModule.forRoot({isGlobal: true,envFilePath: '.env'}), MongooseModule.forRoot('mongodb://localhost/bulk_transaction') , TransactionModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
