let salario_fixo = parseFloat(prompt("Forneça o seu salário fixo: "));
let vlr_vendas = parseFloat(prompt("Valor total de vendas: "));
let comissao1 = 0.03
let comissao2 = 0.05

let novo_sal;

if (vlr_vendas <= 1500) {
    novo_sal = salario_fixo + (vlr_vendas * comissao1);
} else {
    let comissao_vendas = (1500 * comissao1) + ((vlr_vendas - 1500) * comissao2);
    novo_sal = salario_fixo + comissao_vendas;
}

alert("O seu salário ficou em " + novo_sal.toFixed(2));
