import {Component, OnDestroy, OnInit} from '@angular/core';
import {CompaingsService} from "./_services/compaings.service";
import {MediasService} from "./_services/medias.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Compaing Management';
  constructor(
  ) {}
}
