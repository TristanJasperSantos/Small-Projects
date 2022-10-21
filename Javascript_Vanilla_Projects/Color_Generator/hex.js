let colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G"]

let textColor = document.getElementById("main-container")
let changeBtn = document.getElementById("change-color")
let backgroundColor = document.querySelector("main")

changeBtn.addEventListener("click", ()=>{
    let randomColor = "#"
    for(let i=0; i<6; i++) {
        randomColor += colors[getRandomNumber()]
    }
    backgroundColor.style.backgroundColor = randomColor

    textColor.innerHTML = `<h1>Background Color : ${randomColor}</h1>`
})
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length) 
}