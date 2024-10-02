let litros = parseFloat(prompt("Digite o número de litros vendidos:"))
let tipoCombustivel = prompt("Digite o tipo de combustível (A - Álcool, G - Gasolina):").toUpperCase()
let precoLitro
let desconto
let valorTotal

if (tipoCombustivel === 'A') {
    precoLitro = 2.90
    if (litros <= 20) {
        desconto = 0.03
    } else {
        desconto = 0.05
    }
} else if (tipoCombustivel === 'G') {
    precoLitro = 3.30
    if (litros <= 20) {
        desconto = 0.04
    } else {
        desconto = 0.06
    }
} else {
    alert("Tipo de combustível inválido!")
}

if (precoLitro !== undefined) {
    valorTotal = litros * precoLitro * (1 - desconto)
    alert("O valor a ser pago é: R$ " + valorTotal.toFixed(2))
}