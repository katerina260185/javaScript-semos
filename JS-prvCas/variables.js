// program 1

//var -keywords for defining word - klucen zbor za deklartiranje na promenilivi, globalno se koristi, sekage moze da ja koristis
// let klucen zbor za definiranje na lokalna promenliva
//const - definiranje na konstanti 

let usernameTwo = "alek" , emailAddressTwo =  "test@test.com" // moze i vo edna linija da definiras 

// camel case naming convention
let emailAddress = "test@test.com";


//so operatorot "=" zadavame b=vrednost na promenlivi
username = 'Katerina';

console.log(username);

let lastname = "Atanasovska"; // nemora da se delat vo dve linii
// so console.log gi pechatime vrednostite na promenlivite

console.log(lastname);
console.log(emailAddressTwo, usernameTwo); //moze i dve promenilivi vo konzola

const a = 5;
const b = 14;

const d = 4;
const c = d;
const sum = d + c;
console.log(sum);



const zbir = a + b; // osdzemanje, mnozenje, delenje, modulo 7 % 2 (2*3) = 6 i ostatok 1 za da dojde do 7

console.log(username + lastname)
console.log(username + zbir)

console.log(zbir);


const number = "10";


// nemoze vaka mora da imaat pocetna vrednost
// const test;
// so let moze

const test = undefined; // moze da se uporebuva, samo vo javaScript go ima unfdefined
console.log(undefined);

const testNull = null; // ima vrednost ama nema nisto, ne e isto so undefined
console.log(testNull);

let empty = NaN;

let emptyTwo =""; // moze i vaka


// undefined ne e definirana kutija
let testAgain = null;
testAgain = undefined;
console.log(testAgain);



