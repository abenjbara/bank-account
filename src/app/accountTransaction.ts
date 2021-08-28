export class accountTransaction{
  
  public amount: number;
  public type: string;

  constructor(amount: number){  
    this.amount = amount;
    this.type = 'WITHDRAWAL';
  }
}