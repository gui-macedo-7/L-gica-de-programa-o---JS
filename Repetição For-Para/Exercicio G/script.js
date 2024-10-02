let potencia = 3
let expoente
let resultado = 1

console.log("3^0 = " + resultado)

for (expoente = 1; expoente <= 15; expoente++) { 
    resultado = resultado * potencia
    console.log("3^" + expoente + " = " + resultado)
}
