import {Component, OnInit} from '@angular/core';
import {CompaingsService} from "../../_services/compaings.service";
import {BrandsService} from "../../_services/brands.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchObject: any = {
    keyword: '',
    brand: ''
  };

  constructor(
    public compService: CompaingsService,
    public brandsService: BrandsService
  ) {
  }

  ngOnInit(): void {
    this.filter();
  }

  filter() {
    console.log(this.searchObject);
    this.compService.filter({...this.searchObject});
  }

}
