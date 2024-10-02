let ano_atual = parseInt(prompt("Forneça o ano atual"))
let ano_nascimento = parseInt(prompt("Forneça o ano de seu nascimento"))
let idade = ano_atual - ano_nascimento

if (idade >= 18) {
    alert("Você deve votar")
} else
    if (idade > 15) {
        alert("Seu voto é opcional")
    } else
        if (idade < 16) {
            alert("Você não pode votar")
        }

//   OUTRA MANEIRA SIMPLES
//   let idade = parseInt(prompt("Digite a sua idade : "))
//   if (idade < 16) {
//   alert("Não pode votar")
//   } else
//   if (idade < 18) {
//   alert("Voto opcional")
//   } else {
//       alert("Voto Obrigatório")
//   }