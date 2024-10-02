let nmr_conta = parseInt (prompt("Digite o número da conta "))
let saldo_atual = parseFloat (prompt ("Digite seu saldo atual "))
let debito = parseFloat (prompt ("Digite seu débito na conta "))
let credito = parseFloat (prompt ("Digite seu crédito na conta "))

novo_saldo = saldo_atual - debito + credito
if (novo_saldo >= 0) {
    alert("Seu saldo atual é de R$" + novo_saldo + "," + " e ele é positivo!")
}  else {
    alert("Seu saldo atual é de R$" + novo_saldo + "," + "e ele é negativo!")
}