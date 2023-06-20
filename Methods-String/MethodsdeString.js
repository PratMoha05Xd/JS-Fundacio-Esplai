/*let palabra = "supercalifragilisticoespialidoso";

console.log(palabra.length); //32 Logitud del String
console.log(palabra[1]); // u devuelve la posicion de un char dentro del string
console.log(palabra.includes('fragil')); // true la palabra 'fragil' se encuentra  dentro el string
console.log(palabra.includes('listico')); // 14 muestra donde empieza la palabra que hemos ecrito dentro del string
console.log(palabra.startsWith('Super')); // true comprueba si el string empieza por 'super'
console.log(palabra.endsWith('car')); // false comprueba di el string acar por 'car'
console.log(palabra.slice(0, 5)); // Super corta el string desde la posicion 0 hasta la posicion 5
console.log(palabra.slice(5)); // Ca....  corta el string desde dicha posicion en adelante
console.log(palabra.toLocaleUpperCase()); //to Majuscula transforma el string a mayusculas
console.log(palabra.toLocaleLowerCase()); //to Minisculas transferma el string a minisculas
console.log(palabra.replace('califragilisticoespialidoso', 'mercado')); // SuperMercado substituye parte de un string por otro
console.log('abc'.repeat(3)); //abcabcabc repite el string 3 veces
console.log("super cali fragil istico espiali doso".trim()); // Elimina los espacios de nuesteo string
console.log('a,b,c,d,e'.split(',')); //crea un array se perando por, cada un de los elementos de nuestro string*/

// Primer Ejercecio

function substituirLetrasA(string) {
    var resultado = string.replace(/a/g, "O");
    return resultado;
}

// Ejemplo de uso
var textoOriginal = "Hola, tengo algunas manzanas.";
var textoModificado = substituirLetrasA(textoOriginal);
console.log(textoModificado);