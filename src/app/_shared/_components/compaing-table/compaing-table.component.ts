import { Component, OnInit } from '@angular/core';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-compaing-table',
  templateUrl: './compaing-table.component.html',
  styleUrls: ['./compaing-table.component.scss']
})
export class CompaingTableComponent implements OnInit {
  faHourglass = faHourglass;
  constructor() { }

  ngOnInit(): void {
  }

}
