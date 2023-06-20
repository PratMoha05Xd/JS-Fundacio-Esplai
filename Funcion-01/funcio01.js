//con return 
/*function myFunction(name) {
    return "Mohamed";
}
console.log("Hello " + myFunction())*/

//sin Return
/*const name = function(nombre, apellido) {
    console.log("Hola " + nombre + ' ' + apellido)
};

name('Mohamed', 'Jellal')*/

//Funcion array
const funcio = function myFunction(...numbers) {
        numbers.forEach(element => {
            console.log(element)
        });
    }
    //llamada a la funcion 
funcio(1, 2, 3, 4, 5)