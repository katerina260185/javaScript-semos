const temperatures = [33, 32, 35, 30, 29, 28, 27];

(33, 32, 35, 30, 29, 28, 27) /7

let sum = 0;
for (const t of temperatures){
    sum = sum + t;
}
console.log(sum / temperatures.length)





let animals3 = ["Cat", "Dog", "Parrot", "Rabbit", "horse", "goat"];

for(let animal of animals3) {
    console.log(animal);
   }

   for(let i = 1; i < animals3.length; i+=2){
    console.log(animals3[i]);
   }

   //da gi izvadis nevalidnite elementi /null, undefined, NaN
  const validity = [1, 2, null, "kate", "ana", undefined, "password", NaN, true];
 const valid = [];


  //ovoj da se koristi
 for (const el of validity) {
    if(el) valid.push(el)
  }
  console.log(valid);

 //istiot rezultat kako prvoto
  validity.forEach((el, i) => {
    if(i > 2)
    if(el) valid.push(el)
  })
  
