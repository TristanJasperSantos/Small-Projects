let buttonsEl = document.querySelectorAll(".buttons")
let value =  document.getElementById("value")

let number = 0

buttonsEl.forEach((buttons)=>{
    buttons.addEventListener("click",(event)=>{
        const style = event.currentTarget.classList
        if(style.contains("decrease")){
            number--
        }
        else if(style.contains("reset")){
            number = 0
        }else{
            number++
        }
        if(number<0){
            value.style.color = "red"
        }else if(number>0){
            value.style.color = "green"
        }else{
            value.style.color = "black"
        }
        value.textContent = number
    })
})
