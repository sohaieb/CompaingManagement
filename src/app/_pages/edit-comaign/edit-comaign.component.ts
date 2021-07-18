import {Component,  OnInit} from '@angular/core';
import {MediasService} from "../../_services/medias.service";
import {CompaingsService} from "../../_services/compaings.service";
import {ActivatedRoute, Router} from "@angular/router";
import { FormBuilder, Validators} from "@angular/forms";
import {BrandsService} from "../../_services/brands.service";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {formatDate} from "@angular/common";
import {validDate} from "../../_custom_validators/CustomValidators";

@Component({
  selector: 'app-edit-comaign',
  templateUrl: './edit-comaign.component.html',
  styleUrls: ['./edit-comaign.component.scss']
})
export class EditComaignComponent implements OnInit {
  medias: any[] = [];
  selectedMedias: any[] = [];
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
    this.setMedias();
  }

  /**
   * Retreive medias from loaded requests
   * @private
   */
  private setMedias() {
    this.medias = this.mediaService.medias;
    this.initForm();
    this.loadParams();
    this.setFormValues();
  }

  /**
   * Set form values from loaded model
   *
   * @private
   */
  private setFormValues() {
    this.editRequestForm.patchValue({
      comp_brand: this.requestCompaign.brand?.brandId || '',
      campaignName: this.requestCompaign.campaignName,
      decisionDeadline: formatDate(this.requestCompaign.decisionDeadline, 'yyyy-MM-dd', 'en')
    });
    this.selectedMedias = this.requestCompaign.media.map((media: any) => media.mediaId);
  }

  /**
   * Init request form
   */
  initForm() {
    this.editRequestForm = this.fb.group({
      comp_brand: [this.requestCompaign ? this.requestCompaign.brand.brandId : null, [Validators.required]],
      campaignName: [this.requestCompaign ? this.requestCompaign.campaignName : null, [Validators.required]],
      decisionDeadline: [this.requestCompaign ? this.requestCompaign.decisionDeadline : null, [Validators.required, validDate()]]
    });
  }

  /**
   * Load route params and passed id
   *
   * @private
   */
  private loadParams() {
    let id = this.route.snapshot.paramMap.get('id');
    this.requestCompaign = this.compaingService.getById(id);
  }

  /**
   * Save form changes to model
   */
  saveChanges() {
    let body = {...this.editRequestForm.value, requestId: this.requestCompaign.requestId};
    body.comp_media = this.mediaService.getMediasFromIDS(this.selectedMedias);
    this.compaingService.update(body);
    this.router.navigate(['/']);
  }

  /**
   * Check checked checkbox status and update selected
   * medias array
   *
   * @param $event
   */
  selectMedia($event: any) {
    let target = $event.target;
    if(target.checked){
      this.selectedMedias.push(target.value);
    }else{
      let index = this.selectedMedias.findIndex((media: any) => target.value == media);
      this.selectedMedias.splice(index,1);
    }
  }

  selected(media: any) {
    return this.selectedMedias.some((x: any) => media.mediaId == x);
  }
}
