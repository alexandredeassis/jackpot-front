import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JackpotComponent} from './jackpot/jackpot.component';
import {BidComponent} from './bid/bid.component';
import {BidDetailsComponent} from './bid-details/bid-details.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerSigninComponent } from './customer-signin/customer-signin.component';


const routes: Routes = [
  { path: 'jackpot', component: JackpotComponent},
  { path: 'bid', component: BidComponent},
  { path: 'bid-details/:id', component: BidDetailsComponent},
  { path: 'customer', component: CustomerComponent},
  { path: 'signin', component: CustomerSigninComponent},
  { path: '', redirectTo: '/bid', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
