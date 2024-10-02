let base = parseInt(prompt("Informe o valor da base desejada "))
let expoente = parseInt(prompt("Informe o valor do expoente desejado"))
let resultado = 1
let contadora = 1

while (contadora <= expoente) {
    resultado *= base
    contadora++
}
alert("O resultado da potencia é:" + resultado)