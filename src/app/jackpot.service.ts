import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Jackpot} from './jackpot/jackpot';
import {JACKPOTS} from './jackpot/jackpot-mock';


@Injectable({
  providedIn: 'root'
})
export class JackpotService {

  constructor() { }

  getJackpots(): Observable<Jackpot[]> {
       return of(JACKPOTS);
  }
}
