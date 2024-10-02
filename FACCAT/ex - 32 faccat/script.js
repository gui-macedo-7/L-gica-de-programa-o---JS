let time1 = (prompt("Qual o nome do time"))
let time2 = (prompt("Qual o nome do outro do time"))
let golTime1 = parseInt (prompt ("Quantos gols o " + time1 + " fez?"))
let golTime2 = parseInt (prompt ("Quantos gols o " + time2 + " fez?"))

if (golTime1 > golTime2 ) {
    alert ("O " + time1 + " ganhou a partida")
} else
    if (golTime1 < golTime2) {
        alert ("O " + time2 + " ganhou a partida")
    } else {
        alert("Não houve vencedor")
    }
