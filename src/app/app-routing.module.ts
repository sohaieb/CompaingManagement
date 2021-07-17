import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderComponent} from "./_pages/order/order.component";

const routes: Routes = [
  {path: 'order', component: OrderComponent},
  {path: '', redirectTo: 'order', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
