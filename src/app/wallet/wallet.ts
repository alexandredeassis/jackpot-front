import { Customer } from '../customer/customer';
import { Incomming } from './incomming';
import { Outcomming } from './outcomming';


export class Wallet {
    id: number;
    customer: Customer;
    ballance: number;
    incomming: Incomming[];
    outcomming: Outcomming[];   
}
