
// function declaration

// function parametar or arguments, se pisuvaat vo malite zagradi

// biten e redoslednot na parametrite

 

function myFirstFunction(greeting, name) {

// code executed by function // function body

    console.log(greeting  + name);

    //return value
    return // vrakame vrednost, sekoj kod posle return nema da se izvrsi, ako console.log e posle return nema da se izvrsi
    
}

//function call / function invocation
myFirstFunction("hello ", "Kate");

function sum(num1, num2){
    let result = num1 + num2
    return result
}
let result  = sum(4,5)
console.log(result);

const letters = ["z", "d", "r", "a", "v", "o"]
let text = "";
//for (let i = 0; i < string.length; i++){
//    text += string[i]
//}

text = letters.join("");
console.log(text)

console.log(text.split(''))



function myFunction (name){
    let initials = "";
 let nameArray = name.split(' ')
 for (let word of nameArray) {
    initials += word[0]; // moze i charAt(0)
 }

return initials;
}

console.log(myFunction("Katerina Atanasovska"));

function convertFahrenheitToCelsius (farenhait){
    
    let celsius = ((farenhait - 32) * 5) / 9;
    return celsius;
}
console.log(convertFahrenheitToCelsius(100))


const date = new Date(); // vraka datum vo UTC timestamp

console.log(date)

date.getDay() // vraka brojot na denot vo nedelata , a za denot vo mesecot detDate()
date.getMonth() // ke go vrati mesecot 11
date.getFullYear() // ke ja vrati godinata 2022
date.getHours() // ke vrati saat
date.getMinutes() // ke vrati minuti
// 14/11/2022/ 21:45

function convertDate(){
    const date = new Date();
    let day = date.getDate() 
    let month =  date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
   return `${day}/${month}/${year} - ${hours}:${minutes}`
}

console.log(convertDate())