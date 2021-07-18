import {Component, OnDestroy, OnInit} from '@angular/core';
import {MediasService} from "../../_services/medias.service";
import {CompaingsService} from "../../_services/compaings.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit-comaign',
  templateUrl: './edit-comaign.component.html',
  styleUrls: ['./edit-comaign.component.scss']
})
export class EditComaignComponent implements OnInit, OnDestroy {
  medias: any[] = [];
  private subscription: Subscription|undefined;

  constructor(
    private mediaService: MediasService,
    private compaingService: CompaingsService
  ) {

  }

  ngOnInit(): void {
    this.setMedias();
  }

  /**
   * Retreive medias from loaded requests
   * @private
   */
  private setMedias() {
    this.medias = this.mediaService.medias;
    this.subscription = this.compaingService
      .getDataLoadedObservable()
      .subscribe(
        data => {
          this.mediaService.initData(data);
          this.medias = this.mediaService.medias;
        }
      );
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }



}
