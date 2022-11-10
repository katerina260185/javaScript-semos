//uslovni komandi
//() [] {}


//if(/*uslov - logicki iskaz */) { //kod
    //code block
    //komanda 1;
    //komanda 2;
    //komanda 3;

//}

//logicki operatori za sporedba >, <, >=, =<, ==, !=, ===, !==

/*
const a = 1, b=2;

if(a < b) {
    console.log("A e pomalo od B"); // ke se izvrsi
}

if(a > b) {
    console.log("A e pogolemo od B"); //nema da se izvrsi
}

console.log("prodolzuvam....");

const uslov = a < b; // ovaa logicka operacija ni vraka true ili false (BOOLEAN)

if(uslov) {
    console.log("A e pogolemo od B");
}

const uslov2 = a == b;
if(uslov2){
    console.log("prodolzuvam ponatamu"); //nema da izleze
}

//
const c = 3, d = "word";

const uslov3 =  c !== d;

if(c === d) {
    console.log("tocno"); //false so === se sporeduva vrednost i vid
}

if(c !== d) {
    console.log("tocno"); //ke vrati tocno !== ne e ednakvo
}

if(!uslov3){
    console.log("vrati");
}

//if else structure
if(c === d) {
    console.log("netocno")
} else{
    console.log("tocno");
}

//new
const broj1 = 10, broj2 = 5;

if(broj1 > broj2){
    console.log(broj1 + " e pogolem od " + broj2 ) // ova ke se izvrsi
} else if (broj1 < broj2){
    console.log(broj1 + " e pomal od " + broj2) //moze da se koristat bezbrojpati
} else {
    console.log(broj1 + " e ednakov na " + broj2)
}

if("Aleksandar" === "Ana"){
    console.log("true");
}else if("Aleksandar" == "Ana"){
    console.log("iminjata se isti");
} else{
    console.log("iminjata ne se isti"); // ova ke se vrati
}

// one - liner -ternaren operator za sporedba

// ? prasalnikot znaci if
// : dvete tocki else

//console.log("ana" === "ana" ? "iminjata se isti" : "iminjata ne se isti")
// moze da se stavi i vo promenliva

//const names = "ana" === "ana" ? "iminjata se isti" : "iminjata ne se isti";
//console.log(names);

const water = 10; // ni treba 20
const coffe = 5; // ni treba 10

// || OR -operator (ili)
if(water < 20 || coffe < 10){
//ovoj blok na kod se izvrsuva dokolku e ispolnet barem eden od uslovite
console.log("error");
}

// && and - operator (i)
if(water > 20 && coffe > 5){
    //ovoj blok za da se izvrsi treba site uslovi da se ispolneiti
    console.log("moze da pravime kafe");
}

//switch-case sstatement tuka nema logicki iskaz tuku promenliva

const animal = "parrot";

switch(animal){
    case "parrot" : {
        console.log("this animal can sing!") // ova ke go izvrsi
        break // ke zastane tuka, ako nema break ke prodolzi ponatamu bespotrebno
    }

    case "dog" : {
        console.log("this animal can dig!")
        break
    }
    case "cat" : {
        console.log("this animal can purr!")
        break
    }

    default: {  //ako ne e pronajdena vrednosta, ima uloga na ELSE
        console.log("unknown animal")
    }
}

*/
