import { Bid, BidSequence, BidSequenceNumber } from './bid';
import { Jackpot, Lottery } from '../jackpot/jackpot';

export const BIDS: Bid[] = [
    {
        id: 1,
        limitDate: new Date("2020-11-15T14:11:30-03:00"),
        total: 20000,
        missing: 10000,
        status: 'RELEASED',
        remaining: '',
        remainingSeconds: 0,
        label: '20 Números',
        jackpot: {
            id: 1, date: new Date("2020-11-15T10:00:00-03:00"),
            estimate: 400000000, description: 'Normal',
            lottery: {
                id: 1,
                name: 'Lotofacil',
                logo: 'lotofacil.jpg',
                banner: 'lotofacil_large.jpeg',
                minNumber: 15,
                maxNumber: 20
            },
            jackpotNumber: [{id: 1,value: 0},{id: 2,value: 0},{id: 3,value: 0},{id: 4,value: 0},{id: 5,value: 0},{id: 6,value: 0},{id: 7,value: 0},{id: 8,value: 0},{id: 9,value: 0},{id: 10,value: 0},{id: 11,value: 0},{id: 12,value: 0},{id: 13,value: 0},{id: 14,value: 0},{id: 15,value: 0}]
        },
        bidSequences: [
            {
                id: 1,
                bidSequenceNumbers: [
                    { id: 1, value: 1 },
                    { id: 2, value: 3 },
                    { id: 2, value: 4 },
                    { id: 4, value: 5 },
                    { id: 5, value: 6 },
                    { id: 6, value: 7 },
                    { id: 7, value: 8 },
                    { id: 8, value: 10 },
                    { id: 9, value: 11 },
                    { id: 11, value: 12 },
                    { id: 12, value: 14 },
                    { id: 13, value: 15 },
                    { id: 14, value: 17 },
                    { id: 15, value: 18 },
                    { id: 16, value: 20 },
                    { id: 17, value: 21 },
                    { id: 18, value: 22 },
                    { id: 19, value: 24 },
                    { id: 20, value: 25 }
                ]
            }
        ]



    },
    {
        id: 2,
        limitDate: new Date("2020-11-16T14:43:00-03:00"),
        total: 30000,
        missing: 20000,
        status: 'CLOSED',
        remaining: '',
        remainingSeconds: 0,
        label: '17 Números',
        jackpot: {
            id: 2, date: new Date("2020-11-16T10:00:00-03:00"),
            estimate: 800000000,
            description: 'Acumulada',
            lottery: {
                id: 1,
                name: 'Lotofacil',
                logo: 'lotofacil.jpg',
                banner: 'lotofacil_large.jpeg',
                minNumber: 15,
                maxNumber: 20
            },
            jackpotNumber: [{id: 1,value: 0},{id: 2,value: 0},{id: 3,value: 0},{id: 4,value: 0},{id: 5,value: 0},{id: 6,value: 0},{id: 7,value: 0},{id: 8,value: 0},{id: 9,value: 0},{id: 10,value: 0},{id: 11,value: 0},{id: 12,value: 0},{id: 13,value: 0},{id: 14,value: 0},{id: 15,value: 0}]
        },
        bidSequences: [
            {
                id: 2,
                bidSequenceNumbers: [
                    { id: 1, value: 1 },
                    { id: 2, value: 3 },
                    { id: 2, value: 4 },
                    { id: 4, value: 5 },
                    { id: 5, value: 6 },
                    { id: 6, value: 7 },
                    { id: 7, value: 8 },
                    { id: 8, value: 10 },
                    { id: 9, value: 11 },
                    { id: 11, value: 12 },
                    { id: 12, value: 14 },
                    { id: 13, value: 15 },
                    { id: 14, value: 17 },
                    { id: 15, value: 18 },
                    { id: 16, value: 20 },
                    { id: 17, value: 21 }
                ]
            }
        ]

    },
    {
        id: 3,
        limitDate: new Date("2020-11-24T15:00:30-03:00"),
        total: 40000,
        missing: 15090,
        status: 'RELEASED',
        remaining: '',
        remainingSeconds: 0,
        label: '10 Números',
        jackpot: {
            id: 3, date: new Date("2020-11-24T10:00:00-03:00"),
            estimate: 200000000, description: 'Acumulada',
            lottery: {
                id: 2,
                name: 'Megasena',
                logo: 'megasena.jpg',
                banner: 'megasena_large.jpeg',
                minNumber: 6,
                maxNumber: 15
            },
            jackpotNumber: [{id: 1,value: 0},{id: 2,value: 0},{id: 3,value: 0},{id: 4,value: 0},{id: 5,value: 0},{id: 6,value: 0}]
        },
        bidSequences: [
            {
                id: 3,
                bidSequenceNumbers: [
                    { id: 21, value: 11 },
                    { id: 22, value: 22 },
                    { id: 23, value: 33 },
                    { id: 24, value: 44 },
                    { id: 25, value: 45 },
                    { id: 26, value: 55 },
                    { id: 27, value: 56 },
                    { id: 28, value: 57 },
                    { id: 29, value: 58 },
                    { id: 30, value: 59 }

                ]
            }
        ]

    },
    {
        id: 4,
        limitDate: new Date("2020-10-24T15:00:30-03:00"),
        total: 1000,
        missing: 450,
        status: 'RELEASED',
        remaining: '',
        remainingSeconds: 0,
        label: '13 Números',
        jackpot: {
            id: 4, date: new Date("2020-10-24T10:00:00-03:00"),
            estimate: 80000000, description: 'Normal',
            lottery: {
                id: 2,
                name: 'Megasena',
                logo: 'megasena.jpg',
                banner: 'megasena_large.jpeg',
                minNumber: 6,
                maxNumber: 15
            },
            jackpotNumber: [{id: 1,value: 0},{id: 2,value: 0},{id: 3,value: 0},{id: 4,value: 0},{id: 5,value: 0},{id: 6,value: 0}]
        },
        bidSequences: [
            {
                id: 4,
                bidSequenceNumbers: [
                    { id: 21, value: 11 },
                    { id: 22, value: 22 },
                    { id: 23, value: 33 },
                    { id: 24, value: 34 },
                    { id: 25, value: 35 },
                    { id: 26, value: 45 },
                    { id: 27, value: 46 },
                    { id: 28, value: 47 },
                    { id: 29, value: 48 },
                    { id: 30, value: 49 },
                    { id: 31, value: 50 },
                    { id: 32, value: 54 },
                    { id: 33, value: 55 }

                ]
            }
        ]

    },
    {
        id: 5,
        limitDate: new Date("2020-10-25T15:00:30-03:00"),
        total: 1000,
        missing: 450,
        status: 'RELEASED',
        remaining: '',
        remainingSeconds: 0,
        label: '11 Números',
        jackpot: {
            id: 4, date: new Date("2020-10-25T10:00:00-03:00"),
            estimate: 1300000000, description: 'Normal',
            lottery: {
                id: 2,
                name: 'Megasena',
                logo: 'megasena.jpg',
                banner: 'megasena_large.jpeg',
                minNumber: 6,
                maxNumber: 15
            },
            jackpotNumber: [{id: 1,value: 0},{id: 2,value: 0},{id: 3,value: 0},{id: 4,value: 0},{id: 5,value: 0},{id: 6,value: 0}]
        },
        bidSequences: [
            {
                id: 4,
                bidSequenceNumbers: [
                    { id: 21, value: 11 },
                    { id: 22, value: 22 },
                    { id: 23, value: 33 },
                    { id: 24, value: 34 },
                    { id: 25, value: 35 },
                    { id: 26, value: 45 },
                    { id: 27, value: 46 },
                    { id: 28, value: 47 },
                    { id: 29, value: 48 },
                    { id: 30, value: 49 },
                    { id: 31, value: 50 },
                    { id: 32, value: 54 },
                    { id: 33, value: 55 }

                ]
            }
        ]

    },
    {
        id: 6,
        limitDate: new Date("2020-10-20T15:00:30-03:00"),
        total: 1000,
        missing: 450,
        status: 'MISSED',
        remaining: '',
        remainingSeconds: 0,
        label: '11 Números',
        jackpot: {
            id: 4, date: new Date("2020-10-20T10:00:00-03:00"),
            estimate: 1300000000, description: 'Normal',
            lottery: {
                id: 2,
                name: 'Megasena',
                logo: 'megasena.jpg',
                banner: 'megasena_large.jpeg',
                minNumber: 6,
                maxNumber: 15
            },
            jackpotNumber: [{id: 1,value: 0},{id: 2,value: 0},{id: 3,value: 0},{id: 4,value: 0},{id: 5,value: 0},{id: 6,value: 0}]
        },
        bidSequences: [
            {
                id: 4,
                bidSequenceNumbers: [
                    { id: 21, value: 11 },
                    { id: 22, value: 22 },
                    { id: 23, value: 33 },
                    { id: 24, value: 34 },
                    { id: 25, value: 35 },
                    { id: 26, value: 45 },
                    { id: 27, value: 46 },
                    { id: 28, value: 47 },
                    { id: 29, value: 48 },
                    { id: 30, value: 49 },
                    { id: 31, value: 50 },
                    { id: 32, value: 54 },
                    { id: 33, value: 55 }

                ]
            }
        ]

    }

]
