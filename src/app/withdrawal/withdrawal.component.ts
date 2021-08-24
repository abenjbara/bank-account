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
  showErrorAlert: boolean = false;

  ngOnInit(): void {
    this.showErrorAlert = false;
  }

  onSubmit(form: NgForm){
    this.showErrorAlert = this.operationService.withdrawalMoney(new accountTransaction(3,6,this.amountToWithdrawal));
  }

  validWithdrawal(){
    return this.amountToWithdrawal == null || this.amountToWithdrawal > 0;
  }

}
