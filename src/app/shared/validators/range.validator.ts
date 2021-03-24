import { AbstractControl, ValidatorFn } from "@angular/forms";


export function RangeValidator(min: number, max: number): ValidatorFn {
    return (c: AbstractControl) => {
        if (c.value < min || c.value > max) {
            return { range: true };
        }
        return null;
    }
}