let contadora = 1
let soma = 0

while (contadora <= 500) {
    if (contadora % 2 === 0) {
        soma += contadora
    }
    contadora++
}
alert("A soma dos números pares até 500 é de: " + soma);