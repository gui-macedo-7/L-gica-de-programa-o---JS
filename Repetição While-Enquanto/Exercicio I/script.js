let contadora = 1
let soma = 0
let numero = 0
let media = 0

while (contadora <= 10) {
    numero = parseInt(prompt("Digite um número"))
    soma += numero
    contadora++
} media = soma / 10
alert("O resultado da media entre os numeros informados é de: " + media)
alert("O resultado da soma entre os numeros informados é de: " + soma)

