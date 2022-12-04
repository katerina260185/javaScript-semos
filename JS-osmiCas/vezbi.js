

function getEl(el){
    return document.getElementById(el)
}


const books = JSON.parse( localStorage.getItem("books")) || [] // mora da e nadvor od funkcija


function createBook(event){
    event.preventDefault();
    

  const author = document.getElementById("Author").value
  const name = document.getElementById("name").value
  const year = document.getElementById("Year").value


  const book = {author, name, year}

  if(isDuplicate(book)){
    return
  }

  books.push(book)
  localStorage.setItem("books", JSON.stringify(books))

}

console.log(localStorage)

function isDuplicate(newBook){
   console.log(books.find(book => newBook.author === book.author && newBook.name === book.name)) // ja vraka vrednosta
   console.log(books.some(book => newBook.author === book.author && newBook.name === book.name)) // vraka true ili false

}
