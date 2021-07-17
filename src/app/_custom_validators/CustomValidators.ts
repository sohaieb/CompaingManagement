import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import * as moment from "moment";

export function validDate(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if(control.value) {
      try {
        let splitedDate = control.value.match(/(\d\d)(\d\d)/);
        let month = splitedDate[1];
        let year = splitedDate[2];
        let momentDate = moment(`${month}/${year}`,'MM/YY');
        let acceptedDate = moment();
        return momentDate.isAfter(acceptedDate) ? null : {expirationDate: true};
      }catch (e) {
        return {expirationDate: true};
      }
    }
    return null;
  };
}
