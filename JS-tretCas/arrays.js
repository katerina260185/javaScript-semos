//nizi i ciklicno izvrsuvanje na kod
//arrays and loops
// string
//number
//null
//undefined
//booleans true flase

const array = [];  //spdrzat poveke podatoci ; ovaa e prazna niza

const animals = ["Cat", "Dog", "Parrot", "Rabbit"]; // array declaration

const friends = ["Aleksandar", 'Ana', 'Angela'];
//               index = 0    index = 1 index = 2
// se broi od 0
//ako nizata ima n elementi, indexot na posledniot broj e n-1 (bezbroj)

console.log(animals);
console.log(friends);


console.log(animals[0]);
console.log(friends[2]);

animals[0] = "fish"; // go menuvas prviot emlement
console.log(animals)

//da dodavas elementi
animals[1] = "cat"
console.log(animals);

const temporary = animals[0];
animals[0] = animals[3];
animals[3] = temporary;
console.log(temporary);

//DODAVANJE NA NOV ELEMENT na krajot
animals.push("goat")
console.log(animals);

//DODAVAS ELEMENT NA POCETOKOT
animals.unshift("sheep");
console.log(animals);


//BRISENJE OD KRAJOT NA NIZATA
animals.pop()
console.log(animals)

//BRISENJE OD POCETOKOT NA NIZATA
animals.shift()
console.log(animals)

// pop() i shift() moze da se zacuvaat vo promenliva const

//kolku elementi ima nizata
const length = animals.length
console.log(length)

//spojuvanje na nizi
//console.log([1,2,3] + [4,5,6])

const newArray = [1, "ana", true, ["aleksandar", "petar"]]; //niza vo niza

// za da ispecati aleksandar
console.log(newArray[3][0]) //prvo stavas brojot na nizata, pa potoa brojot na elementot vo nizata
console.log(newArray[3]) //nizata vo niza



