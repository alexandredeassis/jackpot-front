import { Component, OnInit } from '@angular/core';
import {Jackpot} from './jackpot';
import {JackpotService} from '../jackpot.service';

@Component({
  selector: 'app-jackpot',
  templateUrl: './jackpot.component.html',
  styleUrls: ['./jackpot.component.css']
})
export class JackpotComponent implements OnInit {
 
  jackpot: Jackpot;
  // jackpot: Jackpot = {
  //   id: 1,
  //   date: new Date("2020-10-02 10:00:00"),
  //   description: 'normal'

  // }

  jackpots: Jackpot[];

  getJackpots():void{
    this.jackpotService.getJackpots().subscribe(jackpots => this.jackpots = jackpots);
  }

  getFilteredJackpots(option: number): Jackpot[] {
    switch(option){
      case 1:
       // return this.jackpots.filter(this.biggest).slice(0,5);
       return this.jackpots.sort((a,b) => a.estimate>b.estimate ? -1:1 ).slice(0,5);
      case 2:
        return this.jackpots.sort((a,b) => a.estimate>b.estimate ? 1:-1 ).slice(0,5);  
      default:
        return this.jackpots;
    }
    
  }
  biggest(jackpot: Jackpot, index, array): boolean  {  
     return jackpot.id > 3;
  }

  constructor(private jackpotService: JackpotService) { }

  ngOnInit(): void {
    this.getJackpots();
  }

  onSelect(jackpot: Jackpot){
    this.jackpot = jackpot;
  }

}
