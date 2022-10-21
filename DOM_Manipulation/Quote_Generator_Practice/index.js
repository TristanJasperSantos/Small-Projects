let quoteEl = document.getElementById("quote-el")
let personEl = document.getElementById("person-el")
let number = 0
const quoteBtn = document.getElementById("new-quote-btn")

const quotation = {
    quote: [`"Books serve to show a man that those original thoughts of his aren't
    very new after all."`, `"The unexamined life is not worth living."`,`"The mind is furnished with ideas by experience alone."`],
    person: ["- Abraham Lincoln", "- Socrates", "- John Locke"]
}
let arrayLength = quotation.quote.length - 1

quoteBtn.addEventListener("click",function(){

    if(number === arrayLength){
        number = 0
    }else{
        number++
    }
    console.log(number)
    quoteEl.innerText = quotation.quote[number]
    personEl.innerText = quotation.person[number]
    

})

