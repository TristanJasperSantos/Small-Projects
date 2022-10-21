let accordion = document.querySelectorAll(".content-container");

accordion.forEach((element) => {
    element.addEventListener("click",function(e){
        e.currentTarget.classList.toggle("active");
        accordion.forEach((item)=>{
            if(item !== element){
                item.classList.remove("active");
            }
        })
    })
});

