import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DshbrdComponent } from './dshbrd/dshbrd.component';
import { MycartComponent } from './mycart/mycart.component';


@NgModule({
  declarations: [
    AppComponent,
  
    DshbrdComponent,
       MycartComponent
      
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
