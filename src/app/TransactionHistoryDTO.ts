import { accountTransaction } from "./accountTransaction";

export class TransactionHistoryDTO {
    
    constructor(
        public balance: number,
        public transactions: accountTransaction[]
    )
    {} 
}