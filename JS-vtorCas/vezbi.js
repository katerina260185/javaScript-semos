const broj = 8;

if (broj %2 === 0 ) {
console.log("brojot e paren")
} else if ( broj % 2 !==0){
    console.log("brojot e neparen")
}
else{
    console.log(broj + "e 0")
}


/*if (broj ===0){
    //console.log("brojot ne e paren nitu neparen")
} else{
    if(broj % 2 ===0) {
        console.log("brojot e paren")
    } else{
        console.log("brojot e neparen")
    }
}
*/

const vozrast = 30;

if(vozrast >=16 && vozrast< 18 ) {
    console.log("covekot moze da vozi")
} else if( vozrast >=18 && vozrast < 21 ){
    console.log("covekot moze da pie alkohol")
} else if(vozrast >=21){
    console.log("covekot moze da pravi se")
} 

// 0-12 dobro utro
// 12-18 dobar den
//18-24 dobra vecer


const time = 19;

if(time >= 1 && time <12 ){
    console.log("dobro utro")
} else if(time >=12 && time <=18 ){
    console.log("dobar den")
} else {
    console.log("dobra vecer");
}

const month = 8; //januari 31 dena

switch(month){
    case 1: 
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
    {
        console.log("31 days")
        break
    } 

    case 2 : {
        
        console.log("28 days")
        break
        }


    case 4:
        case 6:
            case 9:
                {
                    console.log("30 days")
                } break
    default : {
        console.log("monuth is invalid")
    }
}

//domasna zadaca
//treba da se napravi programa kalkulator
// dve promenilivi za brojkite i edna promenliva za operacijata
//programata treba da go ispecat rezulatot od vnesenata operacija vrz dvete brojki
// + - * / %

/* const number1 =10
const number2 = 5
const operation = "*"

output 10 * 5 = 50
delenje so O ne e dozvoleno treba da ispecati greska error
*/