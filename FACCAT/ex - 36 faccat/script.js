let idade1 = parseInt(prompt("Digite a idade do primeiro Homem:"))
let idade2 = parseInt(prompt("Digite a idade do segundo Homem:"))
let idade3 = parseInt(prompt("Digite a idade da primeira Mulher:"))
let idade4 = parseInt(prompt("Digite a idade da segunda Mulher:"))


if (idade1 === idade2 || idade3 === idade4) {
    alert("As idades dos homens ou das mulheres são iguais. Devem ser diferentes.")
} else {
    let homemMaisVelho, homemMaisNovo, mulherMaisVelha, mulherMaisNova
    if (idade1 > idade2) {
        homemMaisVelho = idade1
        homemMaisNovo = idade2
    } else {
        homemMaisVelho = idade2
        homemMaisNovo = idade1
    }
    if (idade3 > idade4) {
        mulherMaisVelha = idade3
        mulherMaisNova = idade4
    } else {
        mulherMaisVelha = idade4
        mulherMaisNova = idade3
    }
    let soma = homemMaisVelho + mulherMaisNova
    let soma2 = homemMaisNovo + mulherMaisVelha
    alert("A soma das idades do homem mais velho com a mulher mais nova é: " + soma)
    alert("O produto das idades do homem mais novo com a mulher mais velha é: " + soma2)
}