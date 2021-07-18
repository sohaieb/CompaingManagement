import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatModules} from "./_shared/_modules/shared-material-design.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";
import {HttpClientModule} from "@angular/common/http";
import {SharedGlobalModules} from "./_shared/_modules/shared-global-modules";
import { HomeComponent } from './_pages/home/home.component';
import { CompaingTableComponent } from './_shared/_components/compaing-table/compaing-table.component';
import { EditComaignComponent } from './_pages/edit-comaign/edit-comaign.component';
import {CompaingsService} from "./_services/compaings.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompaingTableComponent,
    EditComaignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatModules,
    SharedGlobalModules,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot()
  ],
  providers: [CompaingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
