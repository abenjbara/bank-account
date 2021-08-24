import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { accountTransaction } from "../accountTransaction";
import { throwError } from "rxjs";

@Injectable()
export class OpeationService{

    constructor(private httpClient: HttpClient){}

    /**
     * CAll back-end service in order to deposit money
     */
    depositeMoney(transactionDTO: accountTransaction): any{
        console.log('deposit money service called with this transaction:' , transactionDTO);
        this.httpClient
        .post('http://localhost:8080/bank/deposit', transactionDTO, {responseType: 'text'})
        .subscribe(
          (message) => {
            console.log('succes depositeMoney: ' + message);
            return true;
          },
          (error) => {
            console.log('backend retourn this error: ' + error.message);
            
            return false;
          }
        );       
    }

    /**
     * CAll back-end service in order to deposit money
     */
     withdrawalMoney(transactionDTO: accountTransaction): any{
      console.log('withraw service with transaction:' , transactionDTO);
      this.httpClient
      .post('http://localhost:8080/bank/withdrawal', transactionDTO, {responseType: 'text'})
      .subscribe(
        (message) => {
          console.log('succes depositeMoney: ' + message);
          return true;
        },
        (error) => {
          console.log('backend retourn this error: ' + error.message);
          
          return false;
        }
      );       
  }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(
          'Something bad happened; please try again later.');
      }
    
}