let numero1 = Number(prompt("Digite o primeiro número "));
let numero2 = Number(prompt("Digite o segundo número "));
let numero3 = Number(prompt("Digite o terceiro número "));

if (numero1 > numero2 && numero1 > numero3) {
    if (numero2 > numero3) {
        soma = numero1 + numero2;
        alert("Os maiores números são " + numero1 + " e " + numero2 + ", e a soma total é " + soma);
    } else {
        soma = numero1 + numero3;
        alert("Os maiores números são " + numero1 + " e " + numero3 + ", e a soma total é " + soma);
    }
} else if (numero2 > numero1 && numero2 > numero3) {
    if (numero1 > numero3) {
        soma = numero2 + numero1;
        alert("Os maiores números são " + numero2 + " e " + numero1 + ", e a soma total é " + soma);
    } else {
        soma = numero2 + numero3;
        alert("Os maiores números são " + numero2 + " e " + numero3 + ", e a soma total é " + soma);
    }
} else if (numero3 > numero1 && numero3 > numero2) {
    if (numero1 > numero2) {
        soma = numero3 + numero1;
        alert("Os maiores números são " + numero3 + " e " + numero1 + ", e a soma total é " + soma);
    } else {
        soma = numero3 + numero2;
        alert("Os maiores números são " + numero3 + " e " + numero2 + ", e a soma total é " + soma);
    }
}