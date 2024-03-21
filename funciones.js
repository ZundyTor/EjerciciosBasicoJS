// Sumar 2 numeros

// Funcion declarada
function sumar(num1, num2){
    let resultado = num1 + num2
    return resultado
}
console.log(`Suma: ${sumar(10, 30)}`)

// Funcion expresada
let suma = function (x, y){return x + y}
let resultado = suma(15, 5)
console.log(`Suma: ${resultado}`)

// Funcion flecha
const sumaNumeros = (a, b) => a + b
let _resultado = sumaNumeros(5, 10)
console.log(`Suma: ${_resultado}`)