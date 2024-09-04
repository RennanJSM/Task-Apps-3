const palavra = 'planeta'

function inverter(termo: string) {

    let invertido = ''
    const contador = termo.length
    let n = 1

    for(let i = 0; i < contador; i++) {
        
        invertido += termo[termo.length - n]
        n++

    }

    return invertido

}

console.log(inverter(palavra))