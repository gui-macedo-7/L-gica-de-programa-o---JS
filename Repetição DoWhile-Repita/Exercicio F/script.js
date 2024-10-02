let somatorio = 0
let media = 0
let contadora = 0
let valor

do {
    valor = Number(prompt("Digite um número (número negativo para encerrar) "))
    if (valor >= 0) {
        somatorio += valor
        contadora++
    } else if (valor < 0) {
        media = somatorio / contadora
    }
} while (valor >= 0)
    alert("A soma total é " + somatorio + ", a média é " + media + " e foram lidos " + contadora + " valores")