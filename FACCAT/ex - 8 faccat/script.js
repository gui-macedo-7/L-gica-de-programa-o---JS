var total_eleitores = parseInt (prompt ("Digite o total de eleitores: "))
var vt_brancos = parseInt (prompt ("Digite o números de votos brancos: "))
var vt_nulos = parseInt (prompt ("Digite o números de votos nulos: "))
var vt_validos = parseInt (prompt ("Digite o números de votos válidos: "))
var porcentagem_vt_brancos = vt_brancos / total_eleitores * 100
var porcentagem_vt_nulos = vt_nulos / total_eleitores * 100
var porcentagem_vt_validos = vt_validos / total_eleitores * 100
alert ("A porcentagem de votos " + vt_brancos  + " é: " + porcentagem_vt_brancos)
alert ("A porcentagem de votos " + vt_nulos + " é: " + porcentagem_vt_nulos)
alert ("A porcentagem de votos " + vt_validos + " é: " + porcentagem_vt_validos)