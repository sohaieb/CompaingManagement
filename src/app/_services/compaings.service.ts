import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { map} from "rxjs/operators";
import {Observable, Subject} from "rxjs";
import CompaingRequests from '../../assets/payload-rmp.json';

@Injectable({
  providedIn: 'root'
})
export class CompaingsService {
  compaings: any = [];

  constructor() {
    this.compaings = CompaingRequests.requests;
  }

  /**
   * Filter compaing requests or get all
   *
   * @param params
   */
  filter(params: { keyword?: string, brand?: any } = {keyword: '', brand: ''}) {
    return this.compaings.filter((comp: any) => comp.campaignName.toLowerCase().includes(params.keyword) && (!params.brand || comp.brand.brandId == params.brand));
  }

  /**
   * Get compaign request By Id
   *
   * @param requestId
   */
  getById(requestId: any) {
    return this.compaings.find((comp:any) => comp.requestId == requestId);
  }

  /**
   * Update compaing request
   *
   * @param compaingRequest
   */
  update(compaingRequest: any) {
    let index = this.compaings.findIndex((comp:any) => comp.requestId == compaingRequest.id);
    this.compaings[index] = {...this.compaings[index], ...compaingRequest};
  }
}
