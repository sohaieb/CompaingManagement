import {Injectable} from '@angular/core';
import {CompaingsService} from "./compaings.service";
import {Observable, Subject, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MediasService {
  medias: any[] = [];
  mediaSubject = new Subject();

  constructor() {}

  getDataLoadedObservable(): Observable<any> {
    return this.mediaSubject.asObservable();
  }

  onDataLoaded(data: any) {
    this.mediaSubject.next(data);
  }

  /**
   * Get all unique medias
   */
  initData(data: any) {
    this.medias = this.fillMedias(data);
    this.onDataLoaded(this.medias);

  }

  /**
   * Get unique medias and assign it to global array
   *
   * @param data
   */
  fillMedias(data: any) {
    let medias: any[] = [];
    data.forEach((comp: any) => {
      let elements = comp.media.filter(
        (med: any) => !(medias.some(medi => medi.mediaId == med.mediaId))
      );
      medias.push(...elements);
    });
    return medias;
  }
}
