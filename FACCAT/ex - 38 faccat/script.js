let verificarUsuario = parseInt(prompt("Digite os quatro números do seu usuário: "));

let codigo = 1234
let senhaCorreta = 9999

if (verificarUsuario !== codigo) {
    alert("Usuário inválido!");
} else {
    let verificarSenha = parseInt(prompt("Digite os quatro números da sua senha: "));

    if (verificarSenha !== senhaCorreta) {
        alert("Senha incorreta!");
    } else {
        alert("Acesso permitido!");
    }
}

/* 
const codigoCorreto = 1234;
const senhaCorreta = 9999;

let codigo = parseInt(prompt("Digite o código do usuário:"));

if (codigo != codigoCorreto) {
    alert("Usuário inválido!");

} else {
    let senha = parseInt(prompt("Digite a senha:"));

    if (senha != senhaCorreta) {
        alert("Senha incorreta");
    } else {
        alert("Acesso permitido");
    }
}

*/
