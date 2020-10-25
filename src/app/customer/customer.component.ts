import { Component, Directive, Injectable, OnInit } from '@angular/core';
import {AbstractControl, AsyncValidator, FormBuilder, FormControl, FormGroup, NG_ASYNC_VALIDATORS, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { alreadyRegisteredValidator } from './already-registered';
import {Observable, of, timer} from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private customerService: CustomerService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['',[Validators.required,Validators.email], [already(this.customerService)]]
    });
  }

  getFormValidationErrors() {
    Object.keys(this.secondFormGroup.controls).forEach(key => {
  
    const controlErrors: ValidationErrors = this.secondFormGroup.get(key).errors;
    if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
          });
        }
      });
    }
}

export const already = 
  (customerService: CustomerService, time: number = 500) => {
    return (input: FormControl) => {
      //console.log('types '+input.value);
      return timer(time).pipe(
        switchMap(() => customerService.exists(input.value)),
        map(res => {
          return res ? null : {alreadyEmail: true}
        })
      );
    };
  };
