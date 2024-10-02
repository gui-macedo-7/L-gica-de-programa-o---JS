var salario_fixo = parseFloat(prompt("Digite o seu salario fixo: "))
var quant_carros = parseInt(prompt("Digite a quantidade de carros vendidos: "))
var total_vendas = parseFloat(prompt("Digite o valor total das suas vendas:  "))
var valor_por_vendas = parseFloat(prompt("Digite o valor que voce recebe por cada venda realizada:  "))
var extra = total_vendas * (5/100)
var total = quant_carros * valor_por_vendas
var salario_final = extra + total + salario_fixo 
alert("O salario final do funcionario sera de: " + salario_final)
