import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DshbrdComponent } from './dshbrd/dshbrd.component';
import { MycartComponent } from './mycart/mycart.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { TabletsComponent } from './tablets/tablets.component';
const routes: Routes = [
  {path:'mycart',component:MycartComponent},
  {path:'dshbrd',component:DshbrdComponent},
  {path:'laptops',component:LaptopsComponent},
  {path:'tablets',component:TabletsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
