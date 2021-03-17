import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { UserService } from '../services/user.service';

@Directive({
  selector: '[emailMatch]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: EmailMatchDirective, multi: true }
  ]
})
export class EmailMatchDirective implements Validator {

  constructor(private userService: UserService) { }
  validate(control: AbstractControl): ValidationErrors {
    if (!control) return null;

    //{match:true}
    // errors:{match:true}

    if (control.errors && !control.errors.emailMatch) {
      return null;
    }

    if (this.userService.checkEmailExists(control.value)) {
      return { emailMatch: true };
    }

    return null;

  }

}
