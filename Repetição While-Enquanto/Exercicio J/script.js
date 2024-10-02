let contadora = 50
let pares = 0
let soma = 0

while (contadora <= 70) {
    soma += contadora
    contadora += 2
    pares++
} media = soma / pares
alert("A soma total é " + soma + " e a média é de " + media)