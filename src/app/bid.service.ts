import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Bid} from './bid/bid';
import {BIDS} from './bid/bids-mock';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class BidService {

  constructor(private customerService: CustomerService) { }

getBids(): Observable<Bid[]> {
    return of(BIDS);
}
report(){
  console.log("REPORT: "+ BIDS.length)
  BIDS.forEach(resp => console.log("bid element: "+resp.id));
}

getBid(id: number): Observable<Bid> {
  var aux= BIDS.find(element => element.id == id);
  return of(aux);
}


take(bid: Bid, amount: number): Observable<any>{

  console.log('bidservice: '+bid.missing+" amount: "+amount);

  //var aux = BIDS.find(element => element.id == bid.id);

  return this.customerService.take(bid,amount);

 }


}
