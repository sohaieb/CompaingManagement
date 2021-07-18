import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {CompaingsService} from "./compaings.service";

@Injectable({
  providedIn: 'root'
})
export class MediasService {
  medias: any[] = [];

  constructor(
    private compService: CompaingsService
  ) {
    this.medias = this.fillMedias(this.compService.compaings);
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

  /**
   * Get medias objects by ids
   */
  getMediasFromIDS(arrayOfIds: any[]) {
    return this.medias.filter(media => arrayOfIds.some(x => x == media.mediaId));
  }
}
