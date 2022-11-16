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


    //treta zadaca

