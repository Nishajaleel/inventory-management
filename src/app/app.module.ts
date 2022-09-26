import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DshbrdComponent } from './dshbrd/dshbrd.component';
import { MycartComponent } from './mycart/mycart.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { TabletsComponent } from './tablets/tablets.component';

import { SmartWearablesComponent } from './smart-wearables/smart-wearables.component';
import { LoginComponent } from './login/login.component';
import { DatastorageComponent } from './datastorage/datastorage.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { MicrowaveovenComponent } from './microwaveoven/microwaveoven.component';


@NgModule({
  declarations: [
    AppComponent,
  
    DshbrdComponent,
       MycartComponent,
       LaptopsComponent,
       TabletsComponent,
       
       SmartWearablesComponent,
      
       LoginComponent,
       DatastorageComponent,
       MobilesComponent,
       TelevisionsComponent,
       InvoiceComponent,
       WashingmachineComponent,
       MicrowaveovenComponent
      
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
