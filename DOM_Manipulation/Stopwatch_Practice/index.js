let playBtn = document.querySelector("#play")
let resetBtn = document.querySelector("#reset")
let displayTimer = document.getElementById("timer")

let timer = {
    seconds: 0,
    minutes: 0,
    hours:0,
    leadingSeconds: 0,
    leadingMinutes: 0,
    leadingHours: 0,
    timerStatus: "stopped",
    timerInterval: null
}

function stopWatch(){
    
    timer.seconds++
    if(timer.seconds === 60){
        timer.seconds = 0
        timer.minutes++
    }else if(timer.minutes === 60){
        timer.minutes = 0
        timer.hours++
    }

    if(timer.seconds < 10){
        timer.leadingSeconds = "0" + timer.seconds
    }else{
        timer.leadingSeconds = timer.seconds
    } 
    if(timer.minutes < 10){
        timer.leadingMinutes = "0" + timer.minutes
    }else{
        timer.leadingMinutes = timer.minutes
    } 
    if(timer.hours < 10){
        timer.leadingHours = "0" + timer.hours
    }else{
        timer.leadingHours = timer.hours
    }

    displayTimer.textContent = `${timer.leadingHours}:${timer.leadingMinutes}:${timer.leadingSeconds}`
}


playBtn.addEventListener("click",function(){
    if(timer.timerStatus === "stopped"){
        timer.timerInterval = window.setInterval(stopWatch,1000)
        playBtn.id = "pause"
        playBtn.innerHTML = `<i class="fa-solid fa-pause"></i> `
        timer.timerStatus = "started"
    }else if(timer.timerStatus === "started"){
        window.clearInterval(timer.timerInterval)
        playBtn.id = "play"
        playBtn.innerHTML = `<i class="fa-solid fa-play"></i> `
        timer.timerStatus = "stopped"
    }
})

resetBtn.addEventListener("click",function(){
    timer.seconds = 0
    timer.minutes = 0
    timer.hours = 0

    displayTimer.textContent ="00:00:00"

})