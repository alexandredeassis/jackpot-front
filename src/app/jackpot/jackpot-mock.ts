import {Jackpot} from './jackpot';

export const JACKPOTS : Jackpot[] = [
    { id: 1, date: new Date("2020-10-02 10:00:00"), estimate:400000000, description: '20 numeros', lottery:{id: 1, name:'Lotofacil',minNumber:15, maxNumber:20 }},
    { id: 2, date: new Date("2020-10-02 10:00:00"), estimate:300000000, description: '18 numeros',lottery:{id: 1, name:'Lotofacil',minNumber:15, maxNumber:20 }},   
    { id: 3, date: new Date("2020-10-03 10:00:00"), estimate:300000000,description: '16 numeros',lottery:{id: 1, name:'Lotofacil',minNumber:15, maxNumber:20 }},
    { id: 4, date: new Date("2020-10-04 10:00:00"),estimate:7000000000, description: '9 numeros',lottery:{id: 2, name:'Megasena',minNumber:15, maxNumber:20 }},   
    { id: 5, date: new Date("2020-10-05 10:00:00"), estimate:1200000000,description: '8 numeros',lottery:{id: 2, name:'Megasena',minNumber:6, maxNumber:15 }},   
    { id: 6, date: new Date("2020-10-07 10:00:00"), estimate:1000000000,description: '7 numeros',lottery:{id: 2, name:'Megasena',minNumber:6, maxNumber:15 }},
    { id: 7, date: new Date("2020-10-08 10:00:00"), estimate:300000000,description: '20 numeros', lottery:{id: 1, name:'Lotofacil',minNumber:15, maxNumber:20 }},
    { id: 8, date: new Date("2020-10-09 10:00:00"),estimate:300000000, description: '18 numeros',lottery:{id: 1, name:'Lotofacil',minNumber:15, maxNumber:20 }},   
    { id: 9, date: new Date("2020-10-10 10:00:00"), estimate:1200000000,description: '16 numeros',lottery:{id: 1, name:'Lotofacil',minNumber:15, maxNumber:20 }},
    { id: 10, date: new Date("2020-10-11 10:00:00"),estimate:2000000000, description: '9 numeros',lottery:{id: 2, name:'Megasena',minNumber:15, maxNumber:20 }},   
    { id: 11, date: new Date("2020-10-12 10:00:00"),estimate:3000000000,description: '8 numeros',lottery:{id: 2, name:'Megasena',minNumber:6, maxNumber:15 }},   
    { id: 12, date: new Date("2020-10-13 10:00:00"),estimate:4000000000, description: '7 numeros',lottery:{id: 2, name:'Megasena',minNumber:6, maxNumber:15 }}   

]