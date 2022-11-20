// zadaca br.1

let emails = ['test@test', 'test123123', 'koco@koco.net', 'test@koco.co']
let symbols = /['@', '.net', '.com']/g;
let resultSymbols = symbols.test(emails); // ova dava true
let valid =[];
let unvalid = [];

function invalidMails(mails){
  mails.forEach((mail) =>{
    if(mail.includes("@") === false){
      unvalid.push(mail)
    } else if(mail.includes(".com") === false && mail.includes(".net") === false){
      unvalid.push(mail)
    } else {
      valid.push(mail)
    }
  }) 
  return unvalid
}
   const sum = invalidMails(emails)
   console.log(sum)

// zadaca br.2


let names = ["kaTerInA atanasoVska", "SofijA ataNasovska"];
let lowercaseArr = [];
let firstLetterUpper = [];
let str1 = [];

function firstLetter(){
  names.forEach((name) =>{
    lowercaseArr.push(name.toLowerCase())
    return lowercaseArr
  })
  
    lowercaseArr.map((el) => {
   str1 += el.substring(0) + " ";
     })

   firstLetterUpper = str1.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

  console.log(firstLetterUpper)
 } 

firstLetter(names)

// zadaca 3

const myAnimals = [
  { type: 'Horse', numberOfLegs: 4 },
  { type: 'Sheep', numberOfLegs: 4 },
  { type: 'Chicken', numberOfLegs: 2 },
  { type: 'Fish', numberOfLegs: 0 },
  { type: 'Dog', age: 7, numberOfLegs: 4 },
  { type: 'Goat', numberOfLegs: 4 }
];


function numberOfAnimalLegs(animals){
  animals.forEach((animal => {
    const sumOfLegs = myAnimals.reduce((totalSum, leg) => {
      return totalSum + leg.numberOfLegs
    },0)
    console.log(`the sum of all animals legs is ${sumOfLegs}`)
  }))
}

numberOfAnimalLegs(myAnimals)

// zadaca 4

const team = {
  wins: 3, // po 3 poeni
  losses: 4, // - 2 poeni
  draws: 2 // po eden poen
} 

let allPoints = "";


function allTeamPoints(){
let allWins = team.wins *3;
let allDraws = team.draws *1;
let allLosses = team.losses * (-2);
 allPoints = allWins + allDraws + allLosses
 console.log(`All team points are: ${allPoints}`)

}

 allTeamPoints(team)

//zadaca 5
//5. Listata od knigi sto ja rabotevme na chas, da se sortira po azbucen rodosled spored imeto na avtorot

const books = [
  {
   author: 'Fyodor Dostoevsky',
   name: 'crime and punishment',
   year: 1887,
   ISBN: 1,
   price: 500,
   read: true


  },
  {
   author: 'J.K. Rowling',
   name: 'Harry Potter',
   year: 2000,
   ISBN: 2,
   price: 600,
   read: false
 },
 {
   author: 'J.R.R. Tolkien',
   name: 'The Hobbit',
   year: 1910,
   ISBN: 3,
   price: 1000,
   read: false
 },
 {
  author: 'Agata Christi',
  name: 'Murder with mirrors',
  year: 1940,
  ISBN: 4,
  price: 500,
  read: false
}
  
]


books.sort((a, b)=> {
 return a == b ? 0 : a > b ? 1 : -1;
 //ako a i b se isto, se vraka 0, ako a e pogolemo od b, ke zapocne a,b...itn, ako a e pomalo od b, ke odi b,a.... (obratno)
});
console.log(books)