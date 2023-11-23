const  somatoriaDosDivisiveis = require('./desafioEscribo')


//para adicionar mais casos de testes é só adicionar o valor desejado a esse array
const valoresTestes =[ 10, 11, -1, 1.5, true, false, undefined, null ]


function testadorDaFuncao (array) {
    for (let i= 0; i< array.length; i++) {
        console.log(`caso de teste ${i+1} do tipo: ${typeof array[i]}`)
        console.log(`entrada: ${array[i]}`)
        console.log(`saída: ` + somatoriaDosDivisiveis(array[i]))
    }
}


testadorDaFuncao(valoresTestes)