let somaPares, numero
somaPares = 0

for (numero = 1; numero <= 500; numero++) {
    if (numero % 2 === 0) {
        somaPares += numero
    }
}
console.log("O somatório dos números pares entre 1 e 500 é: " + somaPares)

