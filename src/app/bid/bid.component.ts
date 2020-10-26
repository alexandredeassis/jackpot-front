import { Component, OnInit } from '@angular/core';
import {Bid} from './bid';
import {BidService} from '../bid.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { JackpotComponent } from '../jackpot/jackpot.component';

import {CustomerService} from '../customer.service';
import {Customer} from '../customer/customer';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,private bidService: BidService, private customerService: CustomerService) { }

  bid:Bid;
  bids: Bid[];
  getBids():void{
    this.bidService.getBids().subscribe(bids => this.setBids(bids));
  }

  setBids(bids: Bid[]): void{
    this.bids=bids;
    this.calculateRemaining();
    
    
  }

  getLogo(bid: Bid): string{
    return 'assets/'+bid.jackpot.lottery.logo;
  }

  getBanner(bid: Bid): string{
    return 'assets/'+bid.jackpot.lottery.banner;
  }

  getEstimate(bid: Bid): string {
    var millions = 100000000;
    var mil = 100000;

    if(bid.jackpot.estimate>millions)
     {
      var aux = (bid.jackpot.estimate/millions)
      return aux>1? aux+' Milhões': aux+' Milhão';      
     }else{
      return  (bid.jackpot.estimate/mil) + ' Mil';
     }
    
  }
  getFilteredBids(option: number): Bid[] {
    

    switch(option){
      case 1:      
       return this.bids.filter(this.filterDateMoreThanNow).sort((a,b) => a.missing>b.missing ? -1:  1).slice(0,5);
      case 2:
        return this.bids.filter(this.filterDateLessThanNow).sort((a,b) => a.missing>b.missing ? 1: -1).slice(0,10);  
      case 3:
          return this.bids.sort((a,b) => a.limitDate>b.limitDate ? 1: -1).slice(0,3);  
      default:
         // return this.bids.filter(this.filter).slice(0,5);
        return this.bids;
    }
    
    
  }

  getStatus(bid: Bid){
    switch(bid.status){
        case 'RELEASED':
          return 'Aberto';
        case 'CLOSED':
          return 'Fechado';
        case 'MISSED':
          return 'Furou';
        case 'DRAFT':
            return 'Rascunho';
    }
  }

  filterDateMoreThanNow(bid: Bid, index, array): boolean  {  
     return bid.limitDate.getTime() > new Date().getTime();
  }

  filterDateLessThanNow(bid: Bid, index, array): boolean  {  
    return bid.limitDate.getTime() < new Date().getTime();
 }

 filterReleased(bid: Bid, index, array): boolean  {  
  return bid.status == 'RELEASED';
}

filterMissedOrClosed(bid: Bid, index, array): boolean  {  
 return bid.status == 'CLOSED' || bid.status == 'MISSED';
}


  
calculateRemaining(): void {
    this.bids.forEach(function (value) {
      var number = value.limitDate.getTime() - new Date().getTime();
      var seconds = number/1000;
      var minutes = seconds/60;
      var hours = Math.floor(minutes/60);
      var days = Math.round(hours/24);
      var minutesResiduo = Math.floor(minutes%60);
      var secondsResiduo = Math.floor(seconds%60);
      
      var hoursString;
      var minutesString;

      if(hours<10)
        hoursString = '0'+hours;
      else
        hoursString = hours;

      if(minutesResiduo<10){
        minutesString = '0'+minutesResiduo;
      }
      else{
        minutesString = ''+minutesResiduo;
      }  

      var hoursMinutes = hoursString+ ':'+ minutesString;
      if(value.remaining === null || value.remaining != hoursMinutes){
       value.remaining = hoursMinutes;
       value.remainingSeconds = 59;
      } 
      value.remaining = hoursMinutes;
      
      value.remainingSeconds =  value.remainingSeconds<1 ? 0 :value.remainingSeconds -1;
      

  });
  
      setTimeout(()=>{            
        this.calculateRemaining();
    }, 1000);

  }



  ngOnInit(): void {
    this.getBids();
  }

  onSelect(bid: Bid){
    this.bid = bid;
  }


  buy(bid: Bid){
    var customer = this.customerService.getCustomerSync();
    //this.bid = bid;
    
    console.log('Quero:' + customer);
    if(customer === null){
      this.router.navigate(['/signin']);
    }else{
      this.router.navigate(['/bid-details']);
    }
  }

  
  
}
