import {Component, OnDestroy, OnInit} from '@angular/core';
import {MediasService} from "../../_services/medias.service";
import {CompaingsService} from "../../_services/compaings.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {BrandsService} from "../../_services/brands.service";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import * as moment from "moment";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-edit-comaign',
  templateUrl: './edit-comaign.component.html',
  styleUrls: ['./edit-comaign.component.scss']
})
export class EditComaignComponent implements OnInit, OnDestroy {
  medias: any[] = [];
  private subscription: Subscription|undefined;
  editRequestForm: any;
  private requestCompaign: any;
  faLeftArrow = faArrowLeft;
  constructor(
    private mediaService: MediasService,
    private compaingService: CompaingsService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    public brandsService: BrandsService
  ) {

  }

  ngOnInit(): void {
    this.initForm();
    this.setMedias();
  }

  /**
   * Retreive medias from loaded requests
   * @private
   */
  private setMedias() {
    this.medias = this.mediaService.medias;
    this.loadParams();
    this.subscription = this.compaingService
      .getDataLoadedObservable()
      .subscribe(
        data => {
          this.mediaService.initData(data);
          this.medias = this.mediaService.medias;
          this.loadParams();
          this.editRequestForm.setValue({
            comp_brand: this.requestCompaign.brand.brandId,
            campaignName: this.requestCompaign.campaignName,
            comp_media: [],
            decisionDeadline:formatDate(this.requestCompaign.decisionDeadline,'yyyy-MM-dd','en')
          });
          console.log(this.editRequestForm.value);
        }
      );
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  initForm() {
    this.editRequestForm = this.fb.group({
      comp_brand: [this.requestCompaign?this.requestCompaign.brand.brandId:null],
      campaignName: [this.requestCompaign?this.requestCompaign.campaignName:null],
      comp_media: [],
      decisionDeadline: [this.requestCompaign?this.requestCompaign.decisionDeadline:null]
    });
  }


  private loadParams() {
    let id = this.route.snapshot.paramMap.get('id');
    this.requestCompaign = this.compaingService.getById(id);
  }

  saveChanges() {
    let body = {...this.editRequestForm.value,id: this.requestCompaign.id};
    this.compaingService.update(body);
    this.router.navigate(['/']);
  }
}
