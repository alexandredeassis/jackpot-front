import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-signin',
  templateUrl: './customer-signin.component.html',
  styleUrls: ['./customer-signin.component.css']
})
export class CustomerSigninComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private customerService: CustomerService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['',Validators.required,[login(this.firstFormGroup, this.customerService)]]
    });
  }

}


export const login = 
  (firstFormGroup: FormGroup,customerService: CustomerService, time: number = 500) => {
    return (input: FormControl) => {
      //console.log('types '+input.value);
      var email = firstFormGroup.get('firstCtrl').value;
      return timer(time).pipe(        
        switchMap(() => customerService.signIn(email,input.value)),
        map(res => {
          return res ? null : {loginExist: true}
        })
      );
    };
  };
