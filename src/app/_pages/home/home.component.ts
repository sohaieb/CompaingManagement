import {Component, OnDestroy, OnInit} from '@angular/core';
import {CompaingsService} from "../../_services/compaings.service";
import {BrandsService} from "../../_services/brands.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  searchObject: any = {
    keyword: '',
    brand: ''
  };
  compaings: any[] = [];

  constructor(
    public compService: CompaingsService,
    public brandsService: BrandsService
  ) {
  }


  ngOnInit(): void {
    this.getCompaingsRequests();
  }

  private getCompaingsRequests() {
    this.compaings = this.compService.compaings;
  }


  filter() {
    this.compaings = this.compService.filter({...this.searchObject});
  }

}
