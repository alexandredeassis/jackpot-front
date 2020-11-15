import {Jackpot} from '../jackpot/jackpot';

export class Bid {
    id: number;
    limitDate: Date;
    total: number;
    missing: number;
    status: string;
    label: string;
    jackpot: Jackpot;
    remaining: string | undefined;
    remainingSeconds: number | undefined;
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
