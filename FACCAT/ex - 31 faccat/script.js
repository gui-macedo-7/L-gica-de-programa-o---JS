let ladoa = Number(prompt("Informe o valor do primeiro lado:"))
let ladob = Number(prompt("Informe o valor do segundo lado:"))
let ladoc = Number(prompt("Informe o valor do terceiro lado:"))

if (ladoa < ladob + ladoc && ladob < ladoa + ladoc && ladoc < ladoa + ladob) {
    alert("É um triângulo")
} else {
    alert("Não é um triângulo")
}