let produto = (prompt("Digite o nome do produto "))
let qtn_adq = parseInt(prompt("Digite a quantidade comprada "))
let preco_unit = Number(prompt("Digite o preço unitário do produto "))
let total

if (qtn_adq <= 5) {
    desconto = (qtn_adq * preco_unit) * 0.02
    total = (qtn_adq * preco_unit) - desconto
    alert ("Você comprou " + qtn_adq + " " + produto + ", " + "o valor total com desconto ficou " + total)
} else if (qtn_adq <= 10) {
    desconto = (qtn_adq * preco_unit) * 0.03
    total = (qtn_adq * preco_unit) - desconto
    alert ("Você comprou " + qtn_adq + " " + produto + ", " + "o valor total com desconto ficou " + total)
} else {
    desconto = (qtn_adq * preco_unit) * 0.05
    total = (qtn_adq * preco_unit) - desconto
    alert ("Você comprou " + qtn_adq + " " + produto + ", " + "o valor total com desconto ficou " + total)
}