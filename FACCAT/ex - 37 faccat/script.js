let pedido = (prompt("Digite qual fruta deseja comprar: (Maça ou Morango)"))
let quantKG = parseFloat(prompt("Digite o valor em KG"))
let maca
let morango
let desconto
let valorfinal

if (pedido === 'Morango') {
    if (quantKG <= 5) {
        morango = 2.50
        valorfinal = morango * quantKG
        alert ("Seu pedido foi de " + quantKG + "kg de morango" + " e o valor da compra foi de " + valorfinal.toFixed(2))
    } else if (quantKG <= 7) {
        morango = 2.20
        valorfinal = morango * quantKG
        alert ("Seu pedido foi de " + quantKG + "kg de morango" + " e o valor da compra foi de " + valorfinal.toFixed(2))
    } else if (quantKG >= 8) {
        morango = 2.20
        desconto = (quantKG * morango) * 0.1
        valorfinal = (quantKG * morango) - desconto
        alert("Seu pedido foi de " + quantKG + "kg de morango" + " e o valor da compra foi de " + valorfinal.toFixed(2))
    }
} else if (pedido === 'Maça') {
    if (quantKG <= 5) {
        maca = 1.80
        valorfinal = maca * quantKG
        alert ("Seu pedido foi de " + quantKG + "kg de maça" + " e o valor da compra foi de " + valorfinal.toFixed(2))
    } else if (quantKG <= 7) { 
        maca = 1.50
        valorfinal = maca * quantKG
        alert ("Seu pedido foi de " + quantKG + "kg de maça" + " e o valor da compra foi de " + valorfinal.toFixed(2))
    } else if (quantKG >= 8) {
        maca = 1.50
        desconto = (quantKG * maca) * 0.1
        valorfinal = (quantKG * maca) - desconto
        alert("Seu pedido foi de " + quantKG + "kg de maça" + " e o valor da compra foi de " + valorfinal.toFixed(2))        
    }
}

/*
function calcularValor(morangoKg, macaKg) {
    let precoMorango, precoMaca;

    // Definir o preço por Kg de morangos e maçãs
    if (morangoKg <= 5) {
        precoMorango = 2.50;
    } else {
        precoMorango = 2.20;
    }

    if (macaKg <= 5) {
        precoMaca = 1.80;
    } else {
        precoMaca = 1.50;
    }

    // Calcular o valor total sem desconto
    let valorMorango = morangoKg * precoMorango;
    let valorMaca = macaKg * precoMaca;
    let valorTotal = valorMorango + valorMaca;

    // Verificar se há desconto
    let pesoTotal = morangoKg + macaKg;
    if (pesoTotal > 8 || valorTotal > 25.00) {
        valorTotal *= 0.90; // Aplicar 10% de desconto
    }

    return valorTotal.toFixed(2); // Retornar o valor com duas casas decimais
}

// Exemplo de uso
let morangoKg = parseFloat(prompt("Digite a quantidade de morangos (kg):"));
let macaKg = parseFloat(prompt("Digite a quantidade de maçãs (kg):"));
let valorAPagar = calcularValor(morangoKg, macaKg);

alert("O valor total a ser pago é: R$ " + valorAPagar);
*/
