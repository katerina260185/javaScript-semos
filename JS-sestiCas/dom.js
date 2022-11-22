

const buttonElement = document.getElementById("btn-test")

/*
buttonElement.style = "color:red"
buttonElement.style = "background: lightgreen"
buttonElement.onclick = () => {}
*/
function changeText() {

 const paragraph = document.getElementById("text")
 paragraph.innerText = paragraph.innerText + " Kate"

}

//buttonElement.onclick = changeText;

//document.getElementsByTagName("p")
//document.getElementsByClassName("demo")


function createText() {
const span = document.createElement("span");
if(!document.getElementById("dinamicSpan")){
//kreiras span
span.innerText = "Katerina" + " "
// go dodava vo body na kraj kako posledno child
document.body.appendChild(span)
   }
}


buttonElement.onClick = () => {
    changeText()
    createText()
}
 
function deleteElement(){
    const span = document.getElementById("dynamiSpan")
    if(span) {
        document.body.removeChild(span)
    }
}