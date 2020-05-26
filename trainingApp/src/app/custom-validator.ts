import { FormGroup, ValidatorFn } from '@angular/forms';
import * as moment from 'node_modules/moment/moment.js';

export function ValidateUrl(start: string, end: string): ValidatorFn {
    return (group: FormGroup): { [key: string]: any } => {
        if (group.controls[start].value && group.controls[end].value && !compareDate(<Date>group.controls[start].value, <Date>group.controls[end].value)) {
            group.controls[start].setErrors({ dateError: true });
            group.controls[end].setErrors({ dateError: true });
            return { dateError: true };
        }
        else {
            !group.controls[start].value ? group.controls[start].setErrors({ required: true }) : group.controls[start].setErrors(null);
            !group.controls[end].value ? group.controls[end].setErrors({ required: true }) : group.controls[end].setErrors(null);
        }
        return (!group.controls[start].value || !group.controls[end].value) ? { required: true } : null;
    }
}
function compareDate(fromDate: Date, toDate: Date) {
    fromDate.setHours(0, 0, 0, 0);
    toDate.setHours(0, 0, 0, 0);
    if (moment(toDate).isBefore(fromDate)) {
        return false;
    }
    return true;
}