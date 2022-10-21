
// people counter
let saveEl = document.querySelector("#save-el")
let countEl = document.querySelector("#count-el")
const incrementBtn = document.querySelector("#increment-btn")
const saveBtn =  document.querySelector("#save-btn")
let count = 0


incrementBtn.addEventListener("click",function(){
    count++
    countEl.textContent = count
})

saveBtn.addEventListener("click",function(){
    saveEl.textContent += `${count} - ` 
    count = 0
    countEl.textContent = 0
})

// error message
let errorEl = document.querySelector("#error-el")
let errormessage = "Sorry, something went wrong. Please try again."
const purchase = document.querySelector("#purchase-el")


purchase.addEventListener("click",function(){
    errorEl.textContent = errormessage
})

// blackjack game

let questionEl = document.querySelector("#question-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
const startBtn = document.querySelector("#start-el")
const newGameBtn = document.querySelector("#new-card-el")
let message = "Want to play a round?"

let player = {
    cards: [],
    sum: 0,
    isAlive: false,
    haveBlackjack: false,
    name: "Tristan Santos",
    chips: 0
}


function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) +1
    if(randomCard === 1){
        return 11
    }else if(randomCard > 10){
        return 10
    }else{
        return randomCard
    }
    
}
function renderGame(){

    if(player.sum<=20){
        message = "Do you want to draw a new card?"
    }
    else if(player.sum === 21){
        message = "You got a Blackjack!"
        player.haveBlackjack = true
        player.chips += 100
        playerEL.textContent = `${player.name}: $${player.chips}`
    }else{
        player.isAlive = false
        message = "You are out of the game!"

    }
    questionEl.textContent = message
    cardsEl.textContent = "Cards: "
    for(let i=0; i < player.cards.length; i++){
        cardsEl.textContent += `${player.cards[i]} `
    }
    sumEl.textContent = `Sum: ${player.sum}`

}

startBtn.addEventListener("click",function(){
    playerEL.textContent = `${player.name}: $${player.chips}`
    player.isAlive = true
    player.haveBlackjack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    player.cards = [firstCard, secondCard]
    player.sum = firstCard + secondCard

    renderGame()
})

newGameBtn.addEventListener("click",function(){
    if(player.isAlive === true && player.haveBlackjack === false){
        let newCard = getRandomCard()
        player.cards.push(newCard)
        player.sum += newCard
        renderGame()
    }
})

// object practice
let playerEL = document.getElementById("player-el")


