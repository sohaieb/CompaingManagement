import {Component, Input, OnInit} from '@angular/core';
import {
  faHourglass,
  faTimesCircle,
  faCheckCircle,
  faTrash,
  faPaperPlane,
  faPencilAlt
} from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import {CompaingStatusEnum} from "../../../_constants/CompaingStatusEnum";
@Component({
  selector: 'app-compaing-table',
  templateUrl: './compaing-table.component.html',
  styleUrls: ['./compaing-table.component.scss']
})
export class CompaingTableComponent implements OnInit {
  compaingStatus: any = {
    [CompaingStatusEnum.REJECTED]: faTimesCircle,
    [CompaingStatusEnum.VALIDATED]: faCheckCircle,
    [CompaingStatusEnum.TO_REVIEW]: faHourglass,
    [CompaingStatusEnum.SUBMITTED]: faPaperPlane,
    [CompaingStatusEnum.DRAFT]: faTrash,
    [CompaingStatusEnum.TO_MODIFY]: faPencilAlt,
  }
  @Input() compaings: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  formattedDate(submittedDate: string) {
    return moment(submittedDate).format('MMMM Do YYYY');
  }

  getClass(compaing: any) {
    return 'status-'+compaing.requestStatus.requestStatusId.toString();
  }
}
