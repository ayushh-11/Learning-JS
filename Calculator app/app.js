let string="";
let btn=document.querySelectorAll('.button')
btn[0].style.color="red"
Array.from(btn).forEach((btns)=>{   
    btns.addEventListener("click", (e)=>{

        if(e.target.innerHTML=="C"){
            document.querySelector('input').value=""
            string=""

        }
        else if(e.target.innerHTML=="="){
           let val=eval(string)
            document.querySelector('input').value=val
        }

        else{
        console.log(e.target.innerHTML)
        string=string+e.target.innerHTML
        document.querySelector('input').value=string;
        }

    })
})