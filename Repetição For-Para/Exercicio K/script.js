for (let numero = 1; numero <= 10; numero++) {
    if (numero % 2 === 1) {
        let fatorial = 1
        for (let i = 1; i <= numero; i++) {
            fatorial *= i
        }
        console.log("O fatorial de " + numero + " é " + fatorial)
    }
}
