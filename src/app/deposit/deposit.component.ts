import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { accountTransaction } from '../accountTransaction';
import { OpeationService } from '../services/operation.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {

  constructor(private operationService: OpeationService) { }

  amountToDeposit: number = 1;
  showErrorAlert: boolean = false;

  ngOnInit(): void {
    this.showErrorAlert = false;
  }

  onSubmit(form: NgForm){
    this.showErrorAlert = this.operationService.depositeMoney(new accountTransaction(1,1,this.amountToDeposit));
  }

  validDeposit(){
    return this.amountToDeposit == null || this.amountToDeposit > 0;
  }

}
