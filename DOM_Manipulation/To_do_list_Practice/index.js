let container = document.getElementById("container")
let inputEl = document.getElementById("input-el")
let addInput = document.getElementById("add-input")


addInput.addEventListener("click", ()=>{

    
    let task = document.createElement('div')
    task.setAttribute('id','task')

    let li = document.createElement('li')
    li.innerText = inputEl.value
    task.appendChild(li)

    let checkButton = document.createElement('button')
    checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`
    checkButton.setAttribute('id','check-task')
    task.appendChild(checkButton)
    
    let deleteButton = document.createElement('button')
    deleteButton.setAttribute('id','delete-task')
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`
    task.appendChild(deleteButton)

    if(inputEl.value === ""){
        alert("Please input a task first!")
    }else{
        container.style.height = "20rem" 
        container.appendChild(task)
    }

    inputEl.value = ""

    checkButton.addEventListener("click",()=>{
        li.style.textDecoration = "line-through"
    });
    deleteButton.addEventListener("click", ()=>{
        task.remove()
    })
})