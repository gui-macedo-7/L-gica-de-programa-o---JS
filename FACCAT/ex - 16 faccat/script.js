let macas = parseInt (prompt("Quantas maças você comprou?"))

if (macas >= 12) {
    (macas = macas * 1.30)
    total = macas.toFixed(2)
    alert("O valor total é R$" + total)
}  else {
    (macas = macas * 1)
    alert ("O valor total é de R$" + macas)
}