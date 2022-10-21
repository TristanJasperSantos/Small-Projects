let colors = ["Red","Green","Blue","Yellow","Brown", "Violet","Purple"]

let textColor = document.getElementById("main-container")
let changeBtn = document.getElementById("change-color")
let backgroundColor = document.querySelector("main")

changeBtn.addEventListener("click", ()=>{
    const randomColor = Math.floor(Math.random() * colors.length) 
    backgroundColor.style.backgroundColor = colors[randomColor]

    textColor.innerHTML = `<h1>Background Color : ${colors[randomColor]}</h1>`
})