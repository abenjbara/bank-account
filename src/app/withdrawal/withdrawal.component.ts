import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { accountTransaction } from '../accountTransaction';
import { OpeationService } from '../services/operation.service';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss']
})
export class WithdrawalComponent implements OnInit {

  constructor(private operationService: OpeationService) { }

  amountToWithdrawal: number = 1;
  showSuccessAlert = '';
  showErrorAlert = '';

  ngOnInit(): void {
    this.showSuccessAlert = '';
    this.showErrorAlert = '';
  }

  onSubmit(form: NgForm){
    this.operationService.withdrawalMoney(new accountTransaction(this.amountToWithdrawal))
    .subscribe(
      (message: string) => {
        console.log('succes withdrawal: ' + message);
        this.showSuccessAlert = message;
        this.showErrorAlert = '';
      },
      (error: any) => {
        console.log('backend retourn this error: ' + JSON.parse(error.error).message);
        this.showSuccessAlert = '';
        this.showErrorAlert = JSON.parse(error.error).message;
      }
    );
  }

  validWithdrawal(){
    return this.amountToWithdrawal == null || this.amountToWithdrawal > 0;
  }

}
