//zadaca br.1

const words1 = ["katerina", 37, "maja", true, "cat", 12]; //parni
const words2 = ["javascript", "css", 15, "ana", false, "facebook"]; // neparni

let allWords = [];

for(let element in words1){
    for (let element in words2){
        allWords += words2[element] + " " + words1[element] + " ";
    }
    break;
} 

console.log(allWords);

// zadaca br.2

let numbers = [1, 7, 12, 15, 19, 100, 200];
let lowestNum = "";
let highestNum = "";
for(num of numbers){
    lowestNum = Math.min(...numbers);
}

for(num of numbers){
    highestNum = Math.max(...numbers);
}

console.log(lowestNum)
console.log(highestNum)

// zadaca br.3

let randomNumbers =  [1, 7, 12, 15, 19, 100, 200, 1];
let duplicateNumbers = "";
for(let i = 0; i < randomNumbers.length ; i++ ){
    for(let j = 0; j < randomNumbers.length ; j++){
        if (i !== j){ 
            if(randomNumbers[i] === randomNumbers[j]){
            duplicateNumbers = "nema dupli broevi"
        } else {
            duplicateNumbers = "ima dupli broevi"
        }
    }
}
}
console.log(duplicateNumbers);

// zadaca br.4
const letters =["k", "a", "t", "e", "r", "i", "n", "a"];
let makeWord ="";
for(lett in letters){
makeWord += letters[lett]
}
console.log(makeWord);

//vezba br.5


let arr = [1, [8 , 9], 5, 6, 7];
let newArr = [];

for(let i =0; i < arr.length; i++){
    if(arr[i].length >0){
        newArr = arr[i];
        arr.splice(i,1);
            for(let j of newArr){
                arr.push(j)
            }
        }
    }

console.log(arr);
console.log(newArr)

