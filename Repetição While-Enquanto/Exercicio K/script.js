let nome_comodo
let afirmacao = (prompt("Deseja continuar?")).toUpperCase()
let area = 0
let largura = 0
let comprimento = 0
let total = 0
let contadora = 0

while (afirmacao === 'SIM') {
    nome_comodo = prompt("Digite o nome do cômodo")
    largura = Number(prompt("Digite a largura do(a) " + nome_comodo))
    comprimento = Number(prompt("Digite o comprimento do(a) " + nome_comodo))
    area = largura * comprimento
    alert("O comprimento desse cômodo é " + area + "m²")
    total += area
    contadora++
    afirmacao = prompt("Continuar o cálculo ").toUpperCase()
}

alert("O número de comodos contados foram " + contadora + " e p total de area é " + total + "m2")