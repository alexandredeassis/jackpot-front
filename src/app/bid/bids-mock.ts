import {Bid, BidSequence, BidSequenceNumber} from './bid';
import {Jackpot, Lottery} from '../jackpot/jackpot';

export const BIDS : Bid[] = [
    { 
        id: 1, 
        limitDate: new Date("2020-10-02 10:00:00"), 
        total:200, 
        missing: 200,
        status: 'RELEASED', 
        jackpot: { 
            id: 1, date: new Date("2020-10-02 10:00:00"), 
            estimate:400000000, description: '20 numeros',
            lottery: {
                id: 1, 
                name:'Lotofacil',
                minNumber:15, 
                maxNumber:20 
            }
        },
        bidSequences: [
            {
                id: 1, 
                bidSequenceNumbers: [
                    {id: 1, value: 1},
                    {id: 2, value: 2},
                    {id: 2, value: 3},
                    {id: 4, value: 4},
                    {id: 5, value: 5},
                    {id: 6, value: 6},
                    {id: 7, value: 7},
                    {id: 8, value: 8},
                    {id: 9, value: 9},
                    {id: 10, value: 10}
                ]
            }
        ]
            

    
    },
    { 
        id: 2, 
        limitDate: new Date("2020-10-03 10:00:00"), 
        total:300, 
        missing: 100,
        status: 'RELEASED', 
        jackpot: { 
            id: 1, date: new Date("2020-10-02 10:00:00"), 
            estimate:400000000, description: '20 numeros',
            lottery: {
                id: 1, 
                name:'Lotofacil',
                minNumber:15, 
                maxNumber:20 
            }
        },
        bidSequences: [
            {
                id: 2, 
                bidSequenceNumbers: [
                    {id: 11, value: 11},
                    {id: 12, value: 12},
                    {id: 13, value: 13},
                    {id: 14, value: 14},
                    {id: 15, value: 15},
                    {id: 16, value: 16},
                    {id: 17, value: 17},
                    {id: 18, value: 18},
                    {id: 19, value: 19},
                    {id: 20, value: 20}
                ]
            }
        ]
            

    
    } 
             
    
]