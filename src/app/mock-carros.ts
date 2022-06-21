import { carro } from './carros';

//  a fim de gerar um código único para todos os carros, foi definida uma função de geração de ID's aleatórias. link para referência de funções aleatórias: https://www.codegrepper.com/code-examples/javascript/random+number+generator+in+typescript

let max = 9999;
let min = 12345;

function generate_random_ID() {    
    return Math.floor(Math.random() * (max - min) + 1);
}

export const carros: carro[] = [
    {codigo: Math.floor(Math.random() * (max - min) + 1), modelo: 'Chevrolet Onix 2022', preco: 80610, ano_fabricacao: 2022},
    {codigo: Math.floor(Math.random() * (max - min) + 1), modelo: 'Hyundai HB20', preco: 74090, ano_fabricacao: 2022},
    {codigo: Math.floor(Math.random() * (max - min) + 1), modelo: 'VW Gol', preco: 69790, ano_fabricacao: 2022},
    {codigo: Math.floor(Math.random() * (max - min) + 1), modelo: 'Fiat Argo', preco: 76917, ano_fabricacao: 2022},
    {codigo: Math.floor(Math.random() * (max - min) + 1), modelo: 'VW Virtus', preco: 68230, ano_fabricacao: 2022},
] 