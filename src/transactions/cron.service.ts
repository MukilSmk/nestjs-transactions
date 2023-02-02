import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { TransactionsService } from './transaction.service';
import * as xlsx from 'xlsx';
import * as nodemailer from 'nodemailer';


@Injectable()
export class CronService {
    constructor(private transactionsService: TransactionsService) {
    }

    @Cron('45 * * * * *')
    async fetchTodaysTransaction() {
        let results = await this.transactionsService.getTransactions()
        if (results.length != 0) {
            const worksheetColumnName = ["name", "birthday", "createdAt"];
            const data = results.map((trans) => {
                return [trans.name, trans.birthday, trans.createdAt];
            });

            const wb = xlsx.utils.book_new();
            const wsdata = [worksheetColumnName, ...data];
            const ws = xlsx.utils.aoa_to_sheet(wsdata);
            xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
            xlsx.writeFile(wb, 'data.xlsx');

            // Create a transporter object to send email using Outlook
            const transporter = nodemailer.createTransport({
                host: 'smtp-mail.outlook.com',
                port: 587,
                secure: false,
                auth: {
                    user: 'mukilselvam27@outlook.com',
                    pass: 'Mukil123@',
                },
            });

            // Define the email options
            const mailOptions = {
                from: 'mukilselvam27@outlook.com',
                to: 'mukilselvam27@gmail.com',
                subject: 'Excel data',
                attachments: [
                    {
                        filename: 'data.xlsx',
                        path: 'data.xlsx',
                        contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    }
                ],
            };

            // Send the email with the attachment
            await transporter.sendMail(mailOptions);
            console.log("working")
        } else {
            console.log("No data found")
        }
    }
}
