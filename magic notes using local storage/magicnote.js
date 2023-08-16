
let notesobj=""
shownote();
function addnote(){
    let newtext=document.getElementById("exampleFormControlInput1")
    let notes=localStorage.getItem("notes")
    console.log(notes)
    if(notes===null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes)
    }
   notesobj.push(newtext.value)
    localStorage.setItem("notes",JSON.stringify(notesobj))
    
shownote();
    }
function shownote(){
    let notes=localStorage.getItem("notes")
    if(notes===null){
       notesobj=[]
    }
    else{
        notesobj=JSON.parse(notes)
    }
    let html=""
    notesobj.forEach(function(element,index) {
        html+=`
        <div id="id${index}" class="card" style="width: 18rem;">
                <div class="card-body">

                    <p class="card-text">${element}</p>
                    <button class="btn btn-primary" onclick="remove(${index})">Delete</button>
                </div>
            </div>
           `
           if(notesobj != null)
            document.getElementById("output").innerHTML=html;
    });
}
function remove(index){
    let notes=localStorage.getItem("notes")
    if (notes == null)
        notesobj = [];
    else
         notesobj = JSON.parse(notes);
    notesobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    document.querySelector(`#id${index}`).remove();
    shownote();
}