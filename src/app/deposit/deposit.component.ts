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
  showSuccessAlert: string = '';
  showErrorAlert = '';

  ngOnInit(): void {
    this.showSuccessAlert = '';
    this.showErrorAlert = '';
  }

  onSubmit(form: NgForm){
    this.operationService.depositeMoney(new accountTransaction(this.amountToDeposit))
        .subscribe(
          (message: string) => {
            console.log('succes depositeMoney: ' + message);
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

  validDeposit(){
    return this.amountToDeposit == null || this.amountToDeposit > 0;
  }

}
