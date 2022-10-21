let orderContainer = document.querySelector(".order-container")



let menu = [];

window.addEventListener("DOMContentLoaded",fetchData)
async function fetchData(){
    try{
        const response = await fetch("menu.json");
        const data = await response.json();
        menu = data
    }
    catch(error){
        console.log("fetching data failed.",error);
    }
    finally{
        console.log("Function Done");
    }
}

