let nota1 = parseFloat(prompt("Insira a sua primeira nota"))
let nota2 = parseFloat(prompt("Insira a sua segunda nota"))
nota_final = (nota1 + nota2) / 2
if (nota_final >= 6) {
    alert("A sua média é de " + nota_final + " você foi aprovado :D")
} else {
    alert("A sua média é de " + nota_final + " você foi reprovado :(")
}