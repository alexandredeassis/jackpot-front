import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JackpotComponent} from './jackpot/jackpot.component';
import {BidComponent} from './bid/bid.component';


const routes: Routes = [
  { path: 'jackpot', component: JackpotComponent},
  { path: 'bid', component: BidComponent},
  { path: '', redirectTo: '/bid', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
