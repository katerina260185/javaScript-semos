const a = 9;
const b = 3
;
const operacija = "/";

if(operacija == "*"){
    console.log( a * b);
}else if (operacija == "/"){
    console.log(a / b) 
} else if (operacija == "+"){
    console.log(a + b)
} else if(operacija == "-"){
    console.log(a - b)
} else if (operacija == "/" && (a === 0 || b === 0)){
    console.log("error") 
} else {
    console.log("nema broj");
}