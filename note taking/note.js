let add = ""
function addnote() {

    let input = document.getElementById("exampleInputEmail1")

    let mynote = document.getElementById("output")
    let newdiv = document.createElement("div")
    newdiv.className = "mycard"
    newdiv.id = "Card"
    newdiv.innerHTML = `
<p>${input.value}</p> 
<button id="delbtn" onclick="remove(this)">Delete</button>
`
    mynote.append(newdiv)


    input.value = ""
}

function remove(e) {
    console.log(e.parentElement.remove())

}