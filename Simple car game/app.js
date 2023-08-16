let bluecar = document.getElementById('obstaclecar')
let mycar = document.getElementById('mycar')
bluecar.addEventListener("animationiteration", () => {
    let random = Math.floor(Math.random() * 4)

    bluecar.style.left = random * 100 + "px"
})

window.addEventListener('keydown', (e) => {
    let leftcar = parseInt(window.getComputedStyle(mycar).left)

    if (e.keyCode == 39) {

        if (leftcar < 300) {

            mycar.style.left = (leftcar + 100) + "px"
        }
    }
    if (e.keyCode == 37) {

        if (leftcar > 0) {

            mycar.style.left = (leftcar - 100) + "px"
        }
    }

})
let scr=0
let time =setInterval (() => {
    let leftbluecar = parseInt(window.getComputedStyle(bluecar).left)
    let topbluecar = parseInt(window.getComputedStyle(bluecar).top)
    let leftcar = parseInt(window.getComputedStyle(mycar).left)
    console.log(topbluecar)
    scr++
    if (leftcar == leftbluecar && topbluecar >= 130) {
        console.log('hello')
    document.getElementById('result').style.display="block"
    
    console.log(scr)
    document.getElementById('score').innerHTML=scr
    document.getElementById('obstaclecar').style.webkitAnimationPlayState="paused"

    clearInterval(time)
    
    }
}, 100)



