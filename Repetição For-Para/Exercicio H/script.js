let base = parseFloat(prompt("Informe a base "))
let expoente = parseInt(prompt("Informe o expoente "))
let resultado = 1

for (let i = 0; i < expoente; i++) {
    resultado *= base
}
alert(base + " elevado a " + expoente + " é " + resultado)


