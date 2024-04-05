import { AbstractControl, ValidationErrors } from "@angular/forms";

export function noZeroValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value === 0 || value === '0') {
        return { 'noZero': true };
    }
    return null;
}