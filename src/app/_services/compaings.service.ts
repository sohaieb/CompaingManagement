import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {filter, finalize, map} from "rxjs/operators";
import {Observable} from "rxjs";
import {NgxSpinnerService} from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class CompaingsService {
  url = `${environment.backendURL}payload-rmp.json`;
  compaings: any = [];

  constructor(
    private http: HttpClient,
    private spinner: NgxSpinnerService
    ) {  }

  filter(params: { keyword?: string, brand?: any } = {keyword: '', brand: ''}) {
    this.spinner.show();
    return this.http.get(this.url)
      .pipe(
        map((result: any) => {
          let reqs = result.requests;
          return reqs.filter((comp: any) => comp.campaignName.toLowerCase().includes(params.keyword) && (!params.brand || comp.brand.brandId === params.brand));
        }),
        finalize(()=> this.spinner.hide())
        )
      .subscribe(comps => {
        this.compaings = comps;
        console.log(this.compaings);
      });
  }
}
