var salario_atual = parseInt (prompt("Digite o seu salário atual: "))
var reajuste = parseInt (prompt("Digite o reajuste que teve: "))
var desconto = salario_atual / 100 * reajuste
salario_atual = salario_atual - desconto
alert ("O desconto foi de R$" + desconto + ", seu salário atual é:  R$" + salario_atual)