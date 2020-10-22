export interface Jackpot {
    id: number;
    date: Date;
    estimate: number;
    description: string;
    lottery: Lottery;
}

export interface Lottery {
    id: number;
    name: string;
    logo: string;
    banner: string;
    minNumber: number;
    maxNumber: number;
}