import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[mustMatch]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true }
  ]
})
export class MustMatchDirective implements Validator {
  @Input("mustMatch") controlNames: string[] = [];
  constructor() { }
  validate(formGroup:FormGroup): ValidationErrors | null {
    // Implement the validation login in this method
    let c1 = formGroup.controls[this.controlNames[0]];
    let c2 = formGroup.controls[this.controlNames[1]];

    if(!c1 || !c2){
      return null;
    }

    //{match:true}
    // errors:{match:true}

    if ((c1.errors && !c1.errors.match) || (c2.errors && !c2.errors.match)) {
      return null;
    }

    if(c1.value !== c2.value){
      c1.setErrors({match:true});
      c2.setErrors({match:true});
    }else{
      c1.setErrors(null);
      c2.setErrors(null);
    }

    return null;
  }


}



// interface Person{
//   getName():void;
//   getAddress?():void;
//   Name?:string;
//   Address:string;
// }