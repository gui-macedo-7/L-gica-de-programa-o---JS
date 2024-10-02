let termo = 1
let soma = 1
let resultado = 1

for (termo = 1; termo <= 7; termo++) {
    soma += resultado
    resultado += soma
} console.log("O Décimo quinto termo de Fibonacci é " + soma)