let numero
let divisivel
let resultado

for (numero = 1; numero <= 200; numero++) {
    if (numero % 4 === 0) {
        divisivel = numero
        resultado = divisivel / 4
    }
    console.log("O número " + divisivel + " é divisivel por 4, e seu resultado é " + resultado)
}