let contadora = 2
let soma = 0

do {
    if (contadora <= 500) {
        soma = soma + contadora
    }
    contadora = contadora + 2
} while (contadora <= 500)

alert("O somatório dos valores pares de 1 até 500 é: " + soma)
