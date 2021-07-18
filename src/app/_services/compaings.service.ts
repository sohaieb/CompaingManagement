import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {filter, map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompaingsService {
  url = `${environment.backendURL}payload-rmp.json`;
  compaings: any = [];

  constructor(private http: HttpClient) {
  }

  filter(params: { keyword?: string, brand?: any } = {keyword: '', brand: ''}) {
    return this.http.get(this.url)
      .pipe(
        map((result: any) => {
          let reqs = result.requests;
          return reqs.filter((comp: any) => comp.campaignName.toLowerCase().includes(params.keyword) && (!params.brand || comp.brand.brandId === params.brand));
        }))
      .subscribe(comps => {
        this.compaings = comps;
        console.log(this.compaings);
      });
  }
}
