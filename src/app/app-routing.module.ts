import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositComponent } from './deposit/deposit.component';
import { HomeComponent } from './home/home.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'withdrawal', component: WithdrawalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
