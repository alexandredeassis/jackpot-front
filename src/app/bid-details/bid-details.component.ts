import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { BidService } from '../bid.service';
import { Bid } from '../bid/bid';
import { CustomerService } from '../customer.service';
import { Wallet } from '../wallet/wallet';

@Component({
  selector: 'app-bid-details',
  templateUrl: './bid-details.component.html',
  styleUrls: ['./bid-details.component.css']
})
export class BidDetailsComponent implements OnInit {

  
  constructor(private route: ActivatedRoute, private router: Router,private bidService:  BidService,private location: Location, private customerService: CustomerService) { }


  @Input() bid: Bid;
  
  bidded: Bid;
  taked: boolean=false;

  wallet: Wallet;
  slider: number=0;

  getBid(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("parameter id: "+id);
    this.bidService.getBid(id).subscribe(bid => this.setBid(bid));
  }

  getWallet(){
    this.customerService.getWallet().subscribe(resp => this.setWallet(resp));
  }

  setWallet(wallet: Wallet){
    this.wallet = wallet;
    this.fit();
   
  }

  setBid(bid: Bid){
    console.log("setBid: "+bid.id);
    this.bid = bid;
    this.fit();

   
  }
  

  fit(): void{
    if(this.bid !=null && this.wallet!=null && Array.isArray(this.wallet.outcomming) && this.wallet.outcomming.length){
      
      var id = this.bid.id;
      var aux = this.wallet.outcomming.find(e=> e.bid.id === id);
     
      if(aux != null ){
        this.bidded = aux.bid;          
      }
    }
    
  }

  getSpent(): string{
    var diff =  this.bid.missing - (this.bid.missing - this.slider);
    return diff.toString();
  }
  getSpend(): number{
    var diff =  this.bid.missing - (this.bid.missing - this.slider);
    return diff;
  }

  getSaldo(): string{
    var diff =  this.bid.missing - (this.bid.missing - this.slider);
    var resp = this.wallet.ballance - diff;
    return resp.toString();
  }

  getProjecao(): number{
    var value = this.bid.jackpot.estimate;
    if(this.getPercent()!=0){
      return (value*this.getPercent()/100);
    }

  
   return 0;
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

  getMissing(): number{

    if(this.bid.missing<this.wallet.ballance)
      return  this.bid.missing;
     else
     return this.wallet.ballance; 
  }

  getPercent(): number{
    var diff =  this.getMissing() - (this.getMissing() - this.slider);
    var percent = diff/this.bid.total;
    var total = percent*100;
    var resp = Math.round(total);
    var tax = resp - (resp*0.1);
   // console.log("diff: "+diff);
    //console.log("total: "+this.bid.total);
    //console.log("diff/total: "+percent);
    //console.log("diff/total*100: "+total);
    //console.log("resp: "+resp);

    
    return tax;
  }

  take(bid:Bid){    
    this.bidService.take(bid, this.getSpend()).subscribe(resp => (this.taken(resp)));
    
  }
  taken(bidded: any){
    this.bidded = bidded;    
    this.taked = true;
    console.log('BIDDED: '+this.bidded);    
  }

  ngOnInit(): void {
    this.taked = false;
    this.bidded = null;
    this.bid = null;
    this.getBid();
    this.getWallet();
    
    
  }

  

}
