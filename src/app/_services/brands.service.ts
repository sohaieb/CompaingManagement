import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {NgxSpinnerService} from "ngx-spinner";
import {finalize, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  url = `${environment.backendURL}brands.json`;
  brands: any[] = [];

  constructor(
    private http: HttpClient
  ) {
    this.all();
  }

  all() {
    return this.http.get(this.url)
      .subscribe((brands: any) => {
        this.brands = brands;
      });
  }
}
