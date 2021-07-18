import {Component, OnDestroy, OnInit} from '@angular/core';
import {CompaingsService} from "../../_services/compaings.service";
import {BrandsService} from "../../_services/brands.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{

  searchObject: any = {
    keyword: '',
    brand: ''
  };

  compaings: any[] = [];
  private subscription: Subscription | undefined;

  constructor(
    public compService: CompaingsService,
    public brandsService: BrandsService
  ) {
  }


  ngOnInit(): void {
    this.compService.initData();
    this.getCompaingsRequests();
  }

  private getCompaingsRequests() {
    this.subscription = this.compService
      .getDataLoadedObservable()
      .subscribe(
      comps => this.compaings = comps
    );
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  filter() {
    this.compaings = this.compService.filter({...this.searchObject});
  }

}
