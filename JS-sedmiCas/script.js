//JSON JavaScript object notation (transformiran vo tekst)

// { name : "kate"} => {"name" : "kate"}
// ova e object         vaka go vaka vo JSON

 //JSON.stringify(obj) // convertira od object vo JSON string
 //JSON.parse(json) // konventira od string vo palin object

// sinhrono izvrsuvanje na kod od 1 pa ponatamu
//so http asinhrono

 fetch('https://jsonplaceholder.typicode.com/todos/1')
 //callback sto treba da se sluci koga "rikvestot" ke zavrsi, koga podatoicte sto gi barame ke stignat
 .then(response => response.json()) // pvro se konvertira vo JSON
 .then(data => console.log(data)) // gi dobivame prodaticite i moze da gi koristime
 // moze da se korisit samo vo ovaa funkcija

 // parametar na fetch: mandatory
 
.catch(error => console.log(error))
 //ceka da zavrsi prvata linja nema da go izvrsi kodot

 async function getTodos(){
 const response = await  fetch('https://jsonplaceholder.typicode.com/todos/1')
 if(!response.ok) {}
 const data = await response.json()
 console.log(data)
 const aaa = data.title
 console.log(aaa)
 }


getTodos()


fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json()) // pvro se konvertira vo JSON
 .then(post => console.log(post))



