import { Component, OnInit } from '@angular/core';
import {CompaingsService} from "../../_services/compaings.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    public compService: CompaingsService
  ) { }

  ngOnInit(): void {

  }

  filter() {
    this.compService.filter({keyword: 'test 1', brand: 13});
  }

}
