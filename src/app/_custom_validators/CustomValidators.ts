import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import moment from "moment";

export function validDate(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if(control.value) {
      try {
        let momentDate = moment(control.value,'YYYY-MM-DD');
        let today = moment();
        return momentDate.isAfter(today) ? null : {expirationDate: true};
      }catch (e) {
        return {expirationDate: true};
      }
    }
    return null;
  };
}
