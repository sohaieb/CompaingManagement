import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./_pages/home/home.component";
import {EditComaignComponent} from "./_pages/edit-comaign/edit-comaign.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'edit/:id', component: EditComaignComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
