import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

@Directive({
    selector: '[alreadyRegistered]',
    providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
  })
  export class ForbiddenValidatorDirective implements Validator {
    @Input('appAlreadyRegistered') email: string;
  
    validate(control: AbstractControl): {[key: string]: any} | null {
      return this.email ? alreadyRegisteredValidator(new RegExp(this.email, 'i'))(control)
                                : null;
    }
  }

  export function alreadyRegisteredValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const already = nameRe.test(control.value);
      console.log("already registered: "+control.value+ " aready: "+ already);
      return already ? {email: {value: control.value}} : null;
    };
  }