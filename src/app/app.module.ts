import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { SalesService } from './sales.service';
import { FindsaleComponent } from './findsale/findsale.component';
import { SharesaleComponent } from './sharesale/sharesale.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FindsaleComponent,
    SharesaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    NgbModule.forRoot(),
  ],
  providers: [SalesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
