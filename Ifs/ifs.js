//Primer Ejercecio
function getRandom() {
    //return Math.round(Math.random()) == 1 ? true : false; // ternary operator
    return Math.round(Math.random()); // Sin ternary operator
}
//damos el valor del getRandom a una nueva variable y trabajamos con la nueva var
const value = getRandom();

if (value == 1) {
    console.log(' 🙂 ')
} else if (value == 0) {
    console.log('+')
} else {
    console.log("Algo ha sido incorrecto!\n Vuelve a intetar de nuevo!");
}