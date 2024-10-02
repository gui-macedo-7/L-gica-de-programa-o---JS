let contadora = 0
let resultado = 1
let potencias = ''

while (contadora <= 15) {
  potencias += "3 elevado a " + contadora + " é: " + resultado + "\n"
  resultado = resultado * 3
  contadora = contadora + 1
}
alert(potencias)