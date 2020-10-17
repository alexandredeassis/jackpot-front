import { Component, OnInit, Input } from '@angular/core';
import {Jackpot} from '../jackpot/jackpot';

@Component({
  selector: 'app-jackpot-details',
  templateUrl: './jackpot-details.component.html',
  styleUrls: ['./jackpot-details.component.css']
})
export class JackpotDetailsComponent implements OnInit {

  @Input() jackpot: Jackpot;
  
  constructor() { }

  ngOnInit(): void {
  }

}
