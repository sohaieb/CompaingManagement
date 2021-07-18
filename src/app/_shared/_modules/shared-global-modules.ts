import {NgModule} from "@angular/core";
import {NgxSpinnerModule} from "ngx-spinner";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [],
  imports: [
    NgxSpinnerModule,
    FontAwesomeModule
  ],
  exports: [
    NgxSpinnerModule,
    FontAwesomeModule
  ],
  providers: []
})
export class SharedGlobalModules { }
