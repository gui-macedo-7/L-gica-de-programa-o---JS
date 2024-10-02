let hrs_trabalhadas = parseInt(prompt("Digite quantas horas foram trabalhadas no mês?"))
let sal_hora = parseFloat(prompt("Forneça o seu salário por hora"))
let hrs_mes = 40 * 4
let salario
let hrs_extra
let extra
let valor_hr_extra

if (hrs_trabalhadas <= hrs_mes) {
    salario = hrs_trabalhadas * sal_hora
    alert("Sua hora extra foi de R$ 0,00, seu salário do mês é R$ " + salario.toFixed(2))
} else
    if (hrs_trabalhadas > hrs_mes) {
        hrs_extra = hrs_trabalhadas - hrs_mes
        valor_hr_extra = sal_hora * 1.5
        extra = hrs_extra * valor_hr_extra
        salario = (hrs_mes * sal_hora) + extra
        alert("A sua hora extra foi de R$ " + extra.toFixed(2) + ", seu salário do mês é R$ " + salario.toFixed(2))
    }