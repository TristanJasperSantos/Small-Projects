const modalBtn =  document.getElementById("modal-btn")
const closeBtn = document.getElementById("close-modal")
let modalContainer = document.getElementById("modal-container-el")


modalBtn.addEventListener("click",function(){
    modalContainer.style.display = "block";
})
closeBtn.addEventListener("click",function(){
    modalContainer.style.display = "none";
})

window.addEventListener("click",function(e){
    if(e.target === modalContainer){
        modalContainer.style.display = "none";
    }
})