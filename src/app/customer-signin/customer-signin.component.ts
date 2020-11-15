import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap, RouterModule } from '@angular/router';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer/customer';

@Component({
  selector: 'app-customer-signin',
  templateUrl: './customer-signin.component.html',
  styleUrls: ['./customer-signin.component.css']
})
export class CustomerSigninComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),   
   password: new FormControl('', Validators.required ),
  });

  failed: boolean;

  setResponse(customer: Customer){
    if(customer===null)
      this.failed=true;
    else
    {      
      this.failed=false;
      this.router.navigate(['/bid']);
    }  
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    var email = this.profileForm.get('email').value;
    var password = this.profileForm.get('password').value;  
    
    this.customerService.signIn(email,password).subscribe(resp=>this.setResponse(resp),err=>{console.log('fodeu')});
  }

  constructor(private _formBuilder: FormBuilder, private customerService: CustomerService, private router: Router) {}

  ngOnInit() {
  this.failed = false;
  //  this.firstFormGroup = this._formBuilder.group({
   //   firstCtrl: ['', Validators.required]
   // });
   // this.secondFormGroup = this._formBuilder.group({
   //   secondCtrl: ['',Validators.required,[login(this.firstFormGroup, this.customerService)]]
   // });
  }

}




  export const login = 
  (customerService: CustomerService, time: number = 500) => {
    return (input: FormControl) => {
      console.log('input: '+input.value+' formEmail: '+input.parent.get('email').value);
      //var email = formEmail.get('email').value;
      var email = input.parent.get('email').value;
      var password = input.value;
      

      return timer(time).pipe(        
        switchMap(() => customerService.signIn(email,password)),
        map(res => {
          return res ? null : {loginExist: true}
        })
      );
    };
  };
