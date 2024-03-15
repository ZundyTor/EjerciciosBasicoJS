// >, >=
let $x = 1
let $y = 2
let $condicion = $x > $y
let $condicion2 = $x >= $y

// <, <=
let $1 = 1
let $2 = 2
let _condicion = $y < $x
let _condicion2 = $y <= $x

// ==, ===, !=, !==
var a, b, c;
a = 30
b = "30"

if (a == c) {
    console.log("Son de igual valor")
}

if (a === b) {
    console.log("Son iguales en tipo y valor")
} else {
    console.log("Son distintos en tipo o valor")
}

if (a != c) {
    console.log("Son distintos en valor")
} else {
    console.log("Son de igual valor")
}

if (a !== c) {
    console.log("Son distintos en valor o tipo")
} else {
    console.log("Son de igual valor y tipo")
}