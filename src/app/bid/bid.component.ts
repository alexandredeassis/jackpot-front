import { Component, OnInit } from '@angular/core';
import {Bid} from './bid';
import {BidService} from '../bid.service';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {

  constructor(private bidService: BidService) { }


  bid:Bid;
  bids: Bid[];

  getBids():void{
    this.bidService.getBids().subscribe(bids => this.bids = bids);
  }

  getFilteredBids(option: number): Bid[] {
    switch(option){
      case 1:      
       return this.bids.sort((a,b) => a.missing>b.missing ? -1:1 ).slice(0,5);
      case 2:
        return this.bids.sort((a,b) => a.missing>b.missing ? 1:-1 ).slice(0,5);  
      default:
         // return this.bids.filter(this.filter).slice(0,5);
        return this.bids;
    }
    
  }
  filter(bid: Bid, index, array): boolean  {  
     return bid.id > 3;
  }

  ngOnInit(): void {
    this.getBids();
  }

  onSelect(bid: Bid){
    this.bid = bid;
  }
}
