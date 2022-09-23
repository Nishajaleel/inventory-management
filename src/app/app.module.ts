import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DshbrdComponent } from './dshbrd/dshbrd.component';
import { MycartComponent } from './mycart/mycart.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { TabletsComponent } from './tablets/tablets.component';

import { SmartWearablesComponent } from './smart-wearables/smart-wearables.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { LoginComponent } from './login/login.component';
import { DatastorageComponent } from './datastorage/datastorage.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { TelevisionsComponent } from './televisions/televisions.component';


@NgModule({
  declarations: [
    AppComponent,
  
    DshbrdComponent,
       MycartComponent,
       LaptopsComponent,
       TabletsComponent,
       
       SmartWearablesComponent,
       HeadphonesComponent,
       LoginComponent,
       DatastorageComponent,
       MobilesComponent,
       TelevisionsComponent
      
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
