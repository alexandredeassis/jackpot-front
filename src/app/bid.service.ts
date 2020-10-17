import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Bid} from './bid/bid';
import {BIDS} from './bid/bids-mock';

@Injectable({
  providedIn: 'root'
})
export class BidService {

  constructor() { }

  getBids(): Observable<Bid[]> {
    return of(BIDS);
}
}
