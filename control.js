// if
let edad = 18

if (edad >= 18){
    console.log("Es mayor de edad")
} 
else {
    console.log("Es menor de edad")
}

// for
for (let i = 1; i <= 10; i++) {
    console.log(`Salida: ${i}` );
} 

// while
let contador = 0

while (contador < 11){
    if (contador % 2 == 0) {
        console.log(`Salida: ${contador}`)
    } 
    contador++
}

// do while
_contador = 10

do {
    console.log(`Salida: ${_contador}`)
    _contador--
} while(_contador > 0){}