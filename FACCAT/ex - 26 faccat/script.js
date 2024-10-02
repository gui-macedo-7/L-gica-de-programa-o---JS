let qtd_atual = parseInt (prompt("Digite a quantidade atual do seu estoque "))
let qtd_maxima = parseInt (prompt("Digite a quantidade máxima que seu estoque recebe "))
let qtd_minima = parseInt (prompt("Digite a quantidade mínima que seu estoque recebe "))

let qtd_media = ((qtd_maxima + qtd_minima) / 2)
if (qtd_atual >= qtd_media) {
    alert ("Não efetue a compra")
} else {
    alert ("Efetue a compra")
}