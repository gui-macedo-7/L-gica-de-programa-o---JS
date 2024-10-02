let inicio = parseInt (prompt("Forneça a hora do ínicio da partida: "))
let final = parseInt (prompt("Forneça a hora do final da partida:  "))
let horas = parseInt (prompt)

if (final >= inicio) {
    horas = final - inicio
    alert ("A duração do jogo foi de " + horas + " hora(s)")
} else {
    horas = (24 - inicio) + final
    alert ("A duração do jogo foi de " + horas + " hora(s)")
}