/*
while(uslov) {
    kodot
    komanda 1
    komanda 2
    komanda 3
    komanda 4
} */

/*
do {
    kodot
    komanda 1
    komanda 2
    komanda 3
    komanda 4
} while (uslov)

/* 
while (6 > 5){
    console.log()
}
*/ // beskonecno pati ke se izvrsi

let number = 1; // number ke se pise kako i (iterator)
while( 6 > number) {
    console.log("6 e pogolemo od " + number)
    number = number + 1; // mora da se stavi ova za da prekine
}
//moze da se napise 
//number +=number
// ili number ++ (ke go zgolemi number za 1)
// number = number + 1


/*let num = 0;
while(num <= 10){
    console.log(num)
    num++;
} 

let animals2 = ["Cat", "Dog", "Parrot", "Rabbit", "horse", "goat"];

//LOOP mnogu koristena sintaksa
let i = 0;
while(i < animals2.length){ //moze i i <= aniamals2.length -1
    console.log(animals2[i])
    i++
}

//for(let i = 0; i < animals2.length; i++) {
   // console.log(animals2[i]) 

   for (let i = animals2.length -1; i >= 0; i--){
    console.log(animals2[i]);
   }

  //ova se koristi samo kaj nizi ARRAY i OBJECTS,  obratno ke pises animals2.reverse()

   for(let animal of animals2) {
    console.log(animal);
   }

   for(let i = 1; i < animals2.length; i+=2){
    console.log(animals2[i]);
   }
   */