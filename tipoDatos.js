let nombre = "Daniel"
console.log(typeof(nombre))

nombre = 3
console.log(typeof(nombre))

let o
console.log(o)
console.log(typeof(o))

let x = undefined
console.log(x)
console.log(typeof(x))

var $x = 5
var $y = "5"
let $resultado = $x + $y
console.log($resultado)
console.log(typeof($resultado))

function primeraFuncion(){
}

console.log(primeraFuncion)
console.log(typeof(primeraFuncion))

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
}

console.log(Persona)
console.log(typeof(Persona))
