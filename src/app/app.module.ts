import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankComponent } from './bank/bank.component';
import { BankDetailComponent } from './bank/bankdetail.component';
import { FilterPipe } from '.././assets/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BankComponent,
    FilterPipe,
    BankDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
