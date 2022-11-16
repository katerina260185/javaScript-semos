const array1 = [1,2,3,4,5]; //parni
const array2 = [6,7,8,9,10]; //neparni

const result = [];
const len = array1.length;

for(let i =0; i < len; i++){
        result.push(array1.shift()) 
        result.push(array2.shift())
    }



console.log(result);

//vtora zadaca

const numbers = [1,2,3,4,5]; 

/*
if(!numbers.length){
    console.log("list is empty")
}else{

const min = numbers[0]
const max = numbers[0]
}
for(const num of numbers){
    if(num > min){
        min = num;
    } else if(num > max){
        num = max;
    }
    }

    console.log(min)
    console.log(max)
*/

    //treta zadaca

    const duplicates = [1,1,3,4,6,6,7];

    for(let i = 0; i < duplicates.length; i++){
        if(duplicates.indexOf(duplicates[i]) !== 1){
            console.log("ima duplikati");
        }
    }

// cetvra lesna

// petta zadaca


const complex = [1,2, [3,4], 5, 6, [100,101]];
let flat = [];
let subArrays = [];
for (let elem of complex){
    if(!Array.isArray(elem)){
        flat.push(elem)

    } else {
        subArrays.push(...elem)
    }
}

flat.push(...subArrays)
console.log(flat);


