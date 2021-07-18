import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { map} from "rxjs/operators";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompaingsService {
  url = `${environment.backendURL}payload-rmp.json`;
  compaings: any = [];
  dataLoadedSubscription = new Subject();

  constructor(
    private http: HttpClient
    ) {
  }

  getDataLoadedObservable(): Observable<any> {
    return this.dataLoadedSubscription.asObservable();
  }

  onDataLoaded(data: any) {
    this.dataLoadedSubscription.next(data);
  }

  /**
   * Load data from file and send signal when load finshed
   */
  initData(){
    this.http.get(this.url)
      .pipe(
        map((result: any) => result.requests)
      )
      .subscribe(comps => {
        this.compaings = comps;
        this.onDataLoaded(this.compaings);
      });
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
}
