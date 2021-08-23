import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepositComponent } from './deposit/deposit.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OpeationService } from './services/operation.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'deposit', component: DepositComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DepositComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    OpeationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
