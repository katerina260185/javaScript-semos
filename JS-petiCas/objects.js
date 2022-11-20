// problemi od realniot svet
//objektno orientirano programiranje

//da se redat po azbucen redosled (propertsis - kyes)
// key -value
/*
const person ={
    // propertis

    gender: "female",
    name: "kate",
    age: 37,
    height: 160,
    weight: null,
    eat: function() {console.log( `${person.name} ate an apple`)} // funkcija vo objekt // shortcut od funkcija eat: () => {}

 }
//kako se povikuvaat
 console.log(person)

 console.log(person.age)
 console.log(person["gender"])

 // da se promeni vrednost
 person.gender = "male"
 console.log(person.gender);

 // da se izbrise
 delete person.gender
 console.log(person)

 //podobro da se kreira nov objekt otkolku da se brise so delete
 // da se vnimava !!! da ne se izednacuvaat dva objekti, bidejki ako menuvas na eden objekt samo eden key, avtomatski ke se smeni i kaj drugiot

 // da se koristi vaka
 let person2 = {...person} // spred operator ili destructor

 //programer go dodavas, a age go menuvas
let person3 = {...person, profession : "programmer", age: 40}
console.log(person3)


 person2.age = 20;
 person2.gender = "female"
 console.log(person2)

 // zadaca
 // da se presmeta plostina

 const kvadrat = {
    height: 10,
    width: 20
 }
 function presmetajPlostina(square) {
    return square.height * square.width;
    
 }
 console.log(presmetajPlostina(kvadrat));

 // const calculateArea = (square) => {
 //   return square.height * square.width;
 //}
 */

 const person4 = {
    name: "Kate",
    pets: ["cat" , "dog", "parrot"]
 }

 const person5 = {
    name: "Alek",
    pets: ["turtles"]
 }

 const people = [person4, person5]

 function  displayPets(arrayOfpeople) {
    arrayOfpeople.forEach(person => {
        console.log(`${person.name} has ${person.pets.length} pets`)
    })
}
 
displayPets(people);



const students = [
    {
        id:1,
        name: "kate",
        year:1,
        courses: [
               { name: 'math', grade:7},
               { name: 'chemistry', grade:8},
               { name: 'programing', grade:9}
               
        ]
    },
    {
        id:2,
        name: "Alek",
        year:1,
        courses: [
               { name: 'math', grade:10},
               { name: 'chemistry', grade:6},
               { name: 'programing', grade:7},
               
        ]
    },
    {
        id:1,
        name: "ana",
        year:1,
        courses: [
               { name: 'math', grade:8},
               { name: 'chemistry', grade:8},
               { name: 'programing', grade:9}
               
        ]
    },

]

//filter i reduce se iteratori

function calculateAvgGrade (allStudents) { 
    let array = []
    allStudents.forEach(student => { // callback function (anonymous)
      const avgGrade = 
        student.courses.reduce((totalSum, course) => {
          return totalSum + course.grade
        }, 0) / student.courses.length
  
        console.log(`${student.name} has an average grade of ${avgGrade}`)
        array.push({ name: student.name, averageGrade: avgGrade })
    })
    return array
  }
  
  const averageGrades = calculateAvgGrade(students)
  console.log(averageGrades)

function canReciveScholarship(gradeList){
   const filteredList = gradeList.filter((student) => {
        if(student.averageGrade > 8) return true
        return false
    })
    return filteredList
}
console.log(canReciveScholarship(averageGrades))

// 
const books = [
   {
    name: 'Fyodor Dostoevsky',
    author: 'crime and punishment',
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
  }
   
]

function calculateTotalPrice (books){
  return books.reduce((currentSum, book) => {
    if(!book.read){
   return currentSum +=book.price //ako e procitana
    } return currentSum // ako ne e procitana //koga ima return ne treba else ako ne se ispolni ednoto return ke se ispolni drugoto
  },0)
}

console.log(calculateTotalPrice(books))