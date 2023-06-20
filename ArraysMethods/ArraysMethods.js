//JavaSCript array methods

[3, 4, 5, 6].at(1); //4
[3, 4, 5, 6].pop(); // [3, 4, 5]
[3, 4, 5, 6].push(7); // [3, 4, 5, 6, 7]
[3, 4, 5, 6].fill(1); // [1, 1, 1, 1]
[3, 4, 5, 6].join("-"); // '3-4-5-6'
[3, 4, 5, 6].shift(); // [4 , 5, 6]
[3, 4, 5, 6].reverse(); // [6 , 5, 4, 3]
[3, 4, 5, 6].unshift(1); // [1, 3, 4, 5]
[3, 4, 5, 6].includes(5); // true
[3, 4, 5, 6].map((num) => num + 6); // [9, 10, 11, 12]
[3, 4, 5, 6].find((num) => num > 4); // 5
[3, 4, 5, 6].some((num) => num > 5); // [5, 6]
[3, 4, 5, 6].filter((num) => num > 4); // [5, 6]
[3, 4, 5, 6].every((num) => num > 5); // false
[3, 4, 5, 6].findIndex((num) => num > 4); //2
[3, 4, 5, 6].reduce((acc, num) => acc + num); //18


//Map kat3adel lik 3la array f array jdida
/*const arr = [1, 2, 3];

const newArr = arr.map(
    item => item * 2
);

console.log(arr);
console.log(newArr);*/

// Ejercecio 1
/*const arr = ["🍏", "🍉", "🍏", "🍏", "🍉"];

arr.filter(item => {
    if (item == '🍏') {
        console.log('🍏')
    };
});*/

//Ejercecio 2
/*const arr = ["🍏", "🍉", "🍏", "🍏", "🍉"];
let stock = 0;
arr.find(item => {
    if (item == "🍉") {
        stock++;
    };
});
if (stock != 0) { console.log("Aun tenemos " + stock + "🍉 en el menu"); }*/

//2. Encontrar si existe un elemento en el array que sea una piña.🍕🍕🍍🍕🍕
/*const array = ["🍕", "🍕", "🍍", "🍕", "🍕"];
console.log(array.includes('🍍'));*/

//3. Quita la piña del siguiente array. 🍕🍕🍍🍕🍕*/
/*const array = ["🍕", "🍕", "🍍", "🍕", "🍕"];

// Creando un nuevo array:
/*let arraySinPinyas = array.filter((item) => {return item != '🍍'});
console.log(arraySinPinyas);

// Sin crear un nuevo array:
array.forEach((item, index, arr) => {
	item!= '🍍'?true:arr.splice(index, 1);
});
console.log(array);*/

// 4.A partir del siguiente array 🍋🍓🍓🍋🍓 convierte todas las fresas en 🍄

/*let array = ["🍇", "🍋", "🍇", "🍋", "🍇"];
/*
const newArr = array.map((element) => {
	if (element === "🍇") {
		return "🥝";
	}
	return element;
});
console.log(newArr);*/

/*function test(itemFinded, itemChanged) {
	var arrayResult = array.map(item => {
		return item == itemFinded ? itemChanged : item;
	});
    return arrayResult;
}

console.log(test('🍇','🚨'));
console.log(test());*/


// . Añade el siguiente icono 🥵 inmediatamente después del cada 🌶 en el siguiente array: 🌶🥛🌶🥛🌶🥛

/*const arr5 = ["🌶", "🥛", "🌶", "🥛", "🌶", "🥛"];
const result = [];

arr5.map((item, index, array) => {
    /*
    if (item === "🌶" && array[index + 1] === "🥛") {
    	//console.log("La 🌶 está aquí: " + index);
    	//console.log("La 🥛 está aquí: " + (index + 1));
    	//array.splice(index + 1, 1, "🥵");
    	result.push(item);
    	result.push("🥵");
    	//document.write(result);
    	//document.write("<br>")
    } else {
    	result.push(item);
    }*/
/*return item === "🌶" && array[index + 1] === "🥛" ?
        result.push(item, "🥵") :
        result.push(item);
});
console.log(result);

//Con bucle FOR + splice
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] == "🌶") {
        arr5.splice(i + 1, 0, '🥵');
    }
}
console.log(arr5);*/


// 6. Añade una 🃏 cartas comodín entre medio de dos cartas . Por ejemplo:🎴🃏🎴 En el siguiente array: 🎴🎴🎴🃏🎴🎴🎴
array = ["🎴", "🎴", "🎴", "🃏", "🎴", "🎴", "🎴"];
result = [];

array.forEach((item, index, array) => {
    /*
	if (item === array[index + 1]) {
        result.push(item, "🃏"); //🎴, 🃏
	}else{
        result.push(item); //🎴
    }*/
    item === array[index + 1] ?
        result.push(item, "🃏") //🎴🃏
        :
        result.push(item); //🎴
    return result;
});
console.log(result);