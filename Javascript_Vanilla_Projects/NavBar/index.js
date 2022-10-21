const showBtn =  document.getElementById("nav-toggle")
const links = document.querySelector(".links")

showBtn.addEventListener('click',()=>{
    links.classList.toggle("show-link")
})