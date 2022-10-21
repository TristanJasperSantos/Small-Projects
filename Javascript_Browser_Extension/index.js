const inputEl =  document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("list-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const tabs = [
    {url:"https://no.linkedin.com/in/per-harald-borgen"}
]

let myLeads = []
let listItems = " "
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)

}
tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        listItems = " "
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value = null
    listItems = " "
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

deleteBtn.addEventListener("dblclick",function(){
    myLeads = []
    localStorage.clear()
    ulEl.innerHTML = null
})

function render(leads){
    for(let i=0; i<leads.length; i+=1){
        listItems += `
            <li>
                <a 
                    href = ${leads[i]} target = '_blank'> ${leads[i]} 
                </a> 
            </li>
        `
    }
    ulEl.innerHTML = listItems
}