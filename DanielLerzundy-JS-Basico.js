// Programa 1
function parImpar(num) {
    if (num % 2 == 0) {
        return `El numero ${num} es par`
    }
    else {
        return `El numero ${num} es impar`
    }
}

let resultado = console.log(parImpar(2))

// *******************************************************************************************

// Programa 2
let triangulo = function (lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        return "Es un triangulo equilatero"
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return "Es un triangulo isosceles"
    }
    else {
        return "Es un triangulo escaleno"
    }
}

let $resultado2 = console.log(triangulo(11, 7, 10))

// *******************************************************************************************

// Programa 3
const ecCuadratica = (a, b, c) => {
    let discriminante = Math.pow(b, 2) - 4 * a * c

    if (discriminante > 0) {
        return "La ecuacion cuadratica tiene dos soluciones reales"
    } else if (discriminante == 0) {
        return "La ecuacion cuadratica tiene una solucion real repetida"
    }
    else {
        return "La ecuacion cuadratica no tiene soluciones reales"
    }
}

let _resultado3 = console.log(ecCuadratica(3, 5, 2))

// *******************************************************************************************

// Programa 4
const numPrimo = (num) => {
    if (num < 2) {
        return `El numero ${num} no es primo`
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return `El numero ${num} no es primo`
        }
    }

    return `El numero ${num} es primo`
}
let resultado4 = console.log(numPrimo(73))

// *******************************************************************************************

// Programa 5
const estacionMeteorologica = (mes) => {
    switch (mes) {
        case 1:
        case 2:
        case 12:
            return "Invierno"
            break
        case 3:
        case 4:
        case 5:
            return "Primavera"
            break
        case 6:
        case 7:
        case 8:
            return "Verano"
            break
        case 9:
        case 10:
        case 11:
            return "Otonio"
            break
        default:
            return "Mes invalido"
            break
    }
}

let $resultado5 = console.log(estacionMeteorologica(11))

// *******************************************************************************************

// Programa 6
const numeroMayor = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3){
        return `El numero ${num1} es el mayor`
    } else if (num2 > num1  && num2 > num3){
        return `El numero ${num2} es el mayor`
    } else if (num3 > num1 && num3 > num2){
        return `El numero ${num3} es el mayor`
    }
    else {
        return `Los numeros ${num1}, ${num2} y ${num3} son iguales`
    }
}

let _resultado6 = console.log(numeroMayor(15, 60, 20))

// *******************************************************************************************

// Programa 7
const descuento = (docena) => {
    let $descuento
    let compra

    if (docena > 10){
        $descuento = docena * 0.20
        compra = $descuento * 60000
        return `El descuento es de ${$descuento} y el valor de la compra es ${compra}`
    } else if (docena >= 5){
        $descuento = docena * 0.15
        compra = $descuento * 60000
        return `El descuento es de ${$descuento} y el valor de la compra es ${compra}`
    } else if (docena > 1){
        $descuento = docena * 0.10
        compra = $descuento * 60000
        return `El descuento es de ${$descuento} y el valor de la compra es ${compra}`
    }
}

let resultado7 = console.log(descuento(13))