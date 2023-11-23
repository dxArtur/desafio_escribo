function somatoriaDosDivisiveis(numero){

    const CONST1 = 3
    const CONST2 = 5

    if (typeof numero !== 'number'|| numero <= 0 || !Number.isInteger(numero) || isNaN(numero)) {
        return (`O valor que inseriu foi ${numero}, por favor insira um inteiro positivo`)
    }

    let somatoria = 0

    for (let i =1; i< numero; i++) {
        if ( i % CONST1 === 0 || i % CONST2 === 0) {
            somatoria += i
        }
    }
    return somatoria
}

module.exports = somatoriaDosDivisiveis


//COMO TESTAR MANUALMENTE:

/* EXEMPLO DE TESTE:
mostra o resultado da função quando o valor passado for 10
console.log(somatoriaDosDivisiveis(10))
*/



