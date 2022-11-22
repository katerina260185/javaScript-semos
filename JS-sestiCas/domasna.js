function insertRow(){
    const tr = document.createElement("tr")
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")

     td1.innerText = "Row3 cell 1"
     td2.innerText = "Row3 cell 2"

     

    document.getElementById("simpleTable").append(tr, td1, td2)
}
