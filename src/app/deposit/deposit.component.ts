import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { accountTransaction } from '../accountTransaction';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {

  constructor() { }

  model = new accountTransaction();

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    
  }

}
