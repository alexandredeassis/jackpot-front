import { Bid } from '../bid/bid';
import { Wallet } from './wallet';

export class Outcomming {
    id: number;
    amount: number;
    description: string;
    date: Date;    
    bid: Bid;
    
}
