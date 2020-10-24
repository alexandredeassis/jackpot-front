import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';


import {CustomerService} from './customer.service';
import {Customer} from './customer/customer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jackpot';

  constructor(private customerService: CustomerService) { }

  getCustomer(): Customer{
    return this.customerService.getCustomerSync();
  }

  logout(){
    this.customerService.signOut();
}

}
