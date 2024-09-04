import * as fs from 'fs';

const data = fs.readFileSync('faturamento.json', 'utf-8');
const faturamentoMensal = JSON.parse(data).faturamentoMensal;

let menorValor: number = Infinity;
let maiorValor: number = -Infinity;
let somaFaturamento = 0;
let diasComFaturamento = 0;

faturamentoMensal.forEach((dia: {dia: number, valor: number}) => {

    if(dia.valor > 0) {

        if(dia.valor > maiorValor) {
            maiorValor = dia.valor
        }

        if(dia.valor < menorValor) {
            menorValor = dia.valor
        }



        diasComFaturamento++

        somaFaturamento += dia.valor
    }


})

const mediaMensal = somaFaturamento / diasComFaturamento

const diasAcimaDaMedia = faturamentoMensal.filter((dia: { dia: number, valor: number }) => dia.valor > mediaMensal).length;

console.log('Menor valor de faturamento ocorrido em um dia do mês: ', menorValor)

console.log('Maior valor de faturamento ocorrido em um dia do mês: ', maiorValor)
console.log('Média mensal: ', mediaMensal)
console.log('Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ', diasAcimaDaMedia)
