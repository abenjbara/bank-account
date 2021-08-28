import { Component, OnInit } from '@angular/core';
import { accountTransaction } from '../accountTransaction';
import { OpeationService } from '../services/operation.service';
import { TransactionHistoryDTO } from '../TransactionHistoryDTO';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private operationService: OpeationService) { }

  showErrorAlert = '';
  balance: number = 0;
  transactions: accountTransaction[] = [];
  withdrawals: number[] = [];

  ngOnInit(): void {
    this.operationService.transactionsHistory()
    .subscribe(
      (history: TransactionHistoryDTO) => {
        console.log('succes get history: ' + JSON.stringify(history));
        this.balance = history.balance;
        this.transactions = history.transactions;
      },
      (error: any) => {
        console.log('backend returned this error: ' + JSON.parse(error.error).message);
        this.showErrorAlert = JSON.parse(error.error).message;
      }
    );
  }

}
