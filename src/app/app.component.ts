import {Component, OnDestroy, OnInit} from '@angular/core';
import {CompaingsService} from "./_services/compaings.service";
import {MediasService} from "./_services/medias.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Compaing Management';
  private subscription: Subscription|undefined;
  constructor(
    private compaing: CompaingsService,
    private medias: MediasService
  ) {
    this.compaing.initData();
  }
  ngOnInit(): void {
    this.subscription = this.compaing
      .getDataLoadedObservable()
      .subscribe(
        data => {
          this.medias.initData(data);
        }
      );
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
