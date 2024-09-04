function fib() {

    const termos: number[] = []
    termos.push(0, 1)

    for(let i = 1; i < 50; i++) {
        termos.push(termos[termos.length - 1] + termos[termos.length - 2])
    }

    return termos


}

const seq = fib()

let valor = 11


function check() {

    const busca = seq.find(num => num === valor)

    if (busca) {
        return 'O valor está presente na sequência de fibonacci'
    }

    else {
        return 'O valor NÃO está presente na sequência de fibonacci'
    }

}

console.log(check())
