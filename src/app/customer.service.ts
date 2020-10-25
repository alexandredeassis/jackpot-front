import { Injectable } from '@angular/core';
import {EMPTY, Observable, of, throwError} from 'rxjs';
import {Customer} from './customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  localStorage: Storage;

  constructor() { this.localStorage = window.localStorage;}

  
  signIn(email: string, password: string): Observable<any>{
    console.log('signin: '+email+" - "+password);
    
    if(email==='deyse.joaquim@gmail.com' && password === '123'){
      var customer = {'id':1,'name': 'deyse joaquim','email':'deyse.joaquim@gmail.com','token':'123456789'};
      this.localStorage.setItem("customer",JSON.stringify(customer));
      return of(customer);
    }else{
      console.log('voltando porra nenhuma..');      
      throwError(new Error('opss!'));
      return of(null);
    }
  }

  signOut(): void{    
    this.localStorage.clear();
  }
  
  getCustomer(): Observable<Customer> {
    return of(JSON.parse(this.localStorage.getItem("customer")));
  }
  getCustomerSync(): Customer {
    return JSON.parse(this.localStorage.getItem("customer"));
  }

  exists(email: string): Observable<boolean>{    
    if(email === 'deyse.joaquim@gmail.com'){
      return of(false);
    }else{
      return of(true);
    }
    
  }
}
