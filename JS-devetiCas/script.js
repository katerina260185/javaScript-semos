// objektno orientirano programiranje OOP
//JS ne e objektno orientiran jazik
//clasi - generiraat objekti
//iminjata na klasite se sekogas so golema bukva
//pascal-case

// class name declaration
class Person {
    // classbody
    //kakvi svojstva treba da ima objektot ili kakvi funkcii
    // object properties(fields) promenlivi constanti
    // object functions(methods) funkcii
    // koga se pisuva varijabla ne se pisuva const, let, var, samo imeto na varijablata
   // promenlivite ne moze da se koristat nadvor od klasata
   // fields ne se zadolzitelni 
    name; //"Kate" // moze no i ne mora da ima vrednost
    #age;
    #gender;

    //zadolzitelno mora da ima constructor
    // konstruktorot instancija object od tip Person
    // vrednostite da gi povrze so samiot parametaer i da kreira istanca 
    //konstruktorot gi prima, name, age, gender, kako parametri
    constructor(name, age, gender){
        this.name = name;
        this.#age = age;
        this.#gender = gender;
       ///// static maxAge = 120;
    }

        // ne se pisuva function 
    get age() {
        return this.#age
    }
    // setter
    set age(newAge){
        if(this.#validateAge(newAge)){
            this.#age = newAge
        }
    }
    // kreiranje na privaten metod
    #validateAge(newAge) {
        if(newAge > 120){
            console.error("fff")
            return false
        }
        return true

    }
}


const object1 = {name: "kate", age:37, gender: "fimale"} // ova e object

//kreiranje na nov object od tip Person
const Person1 =  new Person("kate", '37', 'fimale') 
const Person2 =  new Person("kate", '37', 'fimale') 


console.log(object1, Person1)

console.log(Person1.age)

//Person1.age(50) // da gi smenis godinite e isto sto i Person1.age = 50
console.log(Person1.age) // ova e funkcija so skratenica , ova e get age

// funkciite i fildovite moze da bidat public ili private
// moze da se iskreira funkcija za private za da ne moze da menuvas vrednosti
// toa se pravi so # 

//Person1.maxAge