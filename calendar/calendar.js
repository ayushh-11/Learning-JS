
let curdate=new Date()
let curmonth=curdate.getMonth()
let curyear=curdate.getFullYear()
let month=["January","February","March","April","May","June","July","August","September","October","November","December"]



function loadcalendar(){

    let name=month[`${curmonth}`]
    document.getElementById("month").innerHTML=name
    console.log(name)
    document.getElementById("year").innerHTML=curyear
let lastdateofmonth=new Date(curyear,curmonth+1,0).getDate()
let firstdayofmonth=new Date(curyear,curmonth,1).getDay()
let liday=``
for(i=firstdayofmonth;i>0;i--){
    liday +=`<li> </li>`
}
 for(i=1;i<=lastdateofmonth;i++){ 
    
liday +=`<li>${i}</li>`
 }
 document.getElementById("daycount").innerHTML=liday

}
loadcalendar()

document.querySelectorAll("#iconpart span").forEach(icon=>{

icon.addEventListener("click",()=>{
    console.log(icon.id)
if(icon.id==="left"){
    curmonth=curmonth-1
}
else{
    curmonth=curmonth+1
}
loadcalendar()
})



})
