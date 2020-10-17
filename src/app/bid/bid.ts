import {Jackpot} from '../jackpot/jackpot';

export interface Bid {
    id: number;
    limitDate: Date;
    total: number;
    missing: number;
    status: string;
    jackpot: Jackpot;
    bidSequences: BidSequence[];

}

export interface BidSequence{
    id: number;
    bidSequenceNumbers: BidSequenceNumber[];
}

export interface BidSequenceNumber{
    id: number;
    value: number;
}