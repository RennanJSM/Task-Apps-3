const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0)

function calc_percentual(faturamento: number, total: number) {

    return (faturamento / total) * 100

}


for(const estado in faturamentoPorEstado) {

    const percentual = calc_percentual(faturamentoPorEstado[estado as keyof typeof faturamentoPorEstado], faturamentoTotal)

    console.log(`Percentual de ${estado}:`, percentual.toFixed(2), '%')

}