import { Injectable } from '@angular/core';
import {EMPTY, Observable, of, throwError} from 'rxjs';

import { Bid } from './bid/bid';
import {Customer} from './customer/customer';
import { Incomming } from './wallet/incomming';
import { Outcomming } from './wallet/outcomming';
import { Wallet } from './wallet/wallet';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  localStorage: Storage;

  private URL = 'http://localhost:8081/auth';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) { this.localStorage = window.localStorage; console.log("cutomerservice constructed");}

  mock: Customer={
    'id': 1,
    'name': 'deyse',
    'email':'deyse.joaquim@gmail.com',
    'password': '123',
    'token': '',
    'create': new Date(),     
    'activate': new Date(),
    'profile': 'BidMaster'
  }
    

  wallet: Wallet={
    'id':1,
    ballance: 10000,
    customer: this.mock,
    incomming: [{'id': 1, 'amount': 100, 'date': new Date(),'description': 'bonus'}],
    outcomming: null

  }

clean(): Wallet {
  console.log("wallet was cleaned");
  this.wallet = new Wallet();
  this.wallet.id = 1;
  this.wallet.ballance = 10000;
  this.wallet.customer = this.mock;
  this.wallet.incomming = [{'id': 1, 'amount': 100, 'date': new Date(),'description': 'bonus'}],
  this.wallet.outcomming = new Array(0);
  return this.wallet;

}


take(aux: Bid, amount: number): Observable<any>{ 
  
 
  if(aux.missing >= amount){    
    aux.missing = aux.missing - amount;
    if(aux.missing>0){
      aux.status = 'RELEASED';
    }else{
      aux.status = 'CLOSED';
    }
    this.wallet.ballance = this.wallet.ballance - amount;
    var outcomming = new Outcomming();
    outcomming.id = new Date().getTime();
    outcomming.bid = aux;
    outcomming.date = new Date();
    outcomming.description = 'bidded';
    outcomming.amount = amount;
    if(this.wallet.outcomming == null){
      this.wallet.outcomming = new Array(0);
    }
    this.wallet.outcomming.push(outcomming);
    console.log('bidded com redução de wallet e outcomming, bidId: '+outcomming.bid.id)
    return of(aux);
  }
  else{
    console.log('customerservice <: '+aux.missing+" amount: "+amount);
    return of(null);
  
  return null;
}
}


  
signIn(email: string, password: string): Observable<any>{
    console.log('signin: '+email+" - "+password);
    var request = new Customer();
    request.email = email;
    request.password = password;    
    return this.http.post<any>(this.URL,request, this.httpOptions).pipe(tap((customer: Customer) => this.setCustomer(customer)), catchError(this.handleError('mengao')));
    
  }

  private handleError<T>(operation = 'operation', result?: T) {   
    return (error: any): Observable<T> => {     
      throwError(new Error('opss!'));
      return of(null);
    };
  }

  setCustomer(customer: Customer): void{
    this.localStorage.setItem("customer",JSON.stringify(customer));
  }

  signInOld(email: string, password: string): Observable<any>{
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
  
  getWallet(): Observable<any> {
    if(this.getCustomerSync()!=null)
      return of(this.wallet);
     else
     return of(null) 
  }
  
  getCustomerSync(): Customer {
    return JSON.parse(this.localStorage.getItem("customer"));
  }

  exists(email: string): Observable<number>{    
    
    if(this.mock.email === email){
      if(this.mock.activate === null)
        return of(1);
      else
        return of(2);

    }else{
      return of(0);
    }
    
  }
}
