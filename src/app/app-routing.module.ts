import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DshbrdComponent } from './dshbrd/dshbrd.component';
import { MycartComponent } from './mycart/mycart.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { TabletsComponent } from './tablets/tablets.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { SmartWearablesComponent } from './smart-wearables/smart-wearables.component';
import { DatastorageComponent } from './datastorage/datastorage.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { TelevisionsComponent } from './televisions/televisions.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'mycart',component:MycartComponent},
  {path:'dshbrd',component:DshbrdComponent},
  {path:'laptops',component:LaptopsComponent},
  {path:'tablets',component:TabletsComponent},
  {path:'headphones',component:HeadphonesComponent},
  {path:'smartwearables',component:SmartWearablesComponent},
  {path:'datastorage',component:DatastorageComponent},
  {path:'mobiles',component:MobilesComponent},
  {path:'televisions',component:TelevisionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
