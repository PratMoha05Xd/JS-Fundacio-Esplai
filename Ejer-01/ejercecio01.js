// Tipo de dato string (cadena de texto)
var nombre = "Mohamed";

// Tipo de dato number (número)
var edad = 26;

// Tipo de dato boolean (booleano)
var esMayorDeEdad = true;

// Tipo de dato null (valor nulo)
var direccion = null;

// Tipo de dato undefined (valor no definido)
var profesion;

// Tipo de dato object (objeto)
var persona = {
    nombre: "Mohamed",
    edad: 26,
    esMayorDeEdad: true
};

// Tipo de dato array (arreglo)
var numeros = [1, 2, 3, 4, 5];

// Tipo de dato function (función)
function saludar(nombre) {
    console.log("¡Hola, " + nombre + "!");
}

// Mostrar el valor de la variable en la consola
console.log(nombre + " tiene " + edad + " anos");
console.log(typeof nombre)

//scope global
let nom = "moha";

//scope local dentro le funcion
function scope() {
    let nom = "moha";
}