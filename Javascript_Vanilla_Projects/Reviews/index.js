const reviews = [
    {
        id: 1,
        img: "url('/Javascript_Vanilla_Projects/Reviews/images/pic1.jpg')no-repeat center center/cover",
        name: "Susan Smith",
        profession: "Web Developer",
        description: "Admiration stimulated cultivated reasonable be projection possession of. Real no near room ye bred sake if some. Is arranging furnished knowledge agreeable so. Fanny as smile up small. It vulgar chatty simple months turned oh at change of. Astonished set expression solicitude way admiration. Admiration stimulated cultivated reasonable be projection possession of. Real no near room ye bred sake if some. Is arranging furnished knowledge agreeable so. Fanny as smile up small. It vulgar chatty simple months turned oh at change of. Astonished set expression solicitude way admiration.",

    },
    {
        id: 2,
        img: "url('/Javascript_Vanilla_Projects/Reviews/images/pic2.png')no-repeat center center/cover",
        name: "Tristan Santos",
        profession: "Full Stack Developer",
        description: "Sudden looked elinor off gay estate nor silent. Son read such next see the rest two. Was use extent old entire sussex. Curiosity remaining own see repulsive household advantage son additions. Supposing exquisite daughters eagerness why repulsive for. Praise turned it lovers be warmly by. Little do it eldest former be if.",

    },
    {
        id: 3,
        img: "url('/Javascript_Vanilla_Projects/Reviews/images/pic3.jpg')no-repeat center center/cover",
        name: "Renz Santos",
        profession: "Electronics Engineer",
        description: "Denote simple fat denied add worthy little use. As some he so high down am week. Conduct esteems by cottage to pasture we winding. On assistance he cultivated considered frequently. Person how having tended direct own day man. Saw sufficient indulgence one own you inquietude sympathize.",

    },    
    {
        id: 4,
        img: "url('/Javascript_Vanilla_Projects/Reviews/images/pic4.jpg')no-repeat center center/cover",
        name: "David Martinez",
        profession: "Cyberpunk Edgerunner",
        description: "Its had resolving otherwise she contented therefore. Afford relied warmth out sir hearts sister use garden. Men day warmth formed admire former simple. Humanity declared vicinity continue supplied no an. He hastened am no property exercise of. Dissimilar comparison no terminated devonshire no literature on. Say most yet head room such just easy.",

    }
];
const img = document.getElementById("image");
const nameEl = document.getElementById("name");
const profession = document.getElementById("profession");
const description = document.getElementById("description");

const buttonNext = document.getElementById("btn-next");
const buttonPrev = document.getElementById("btn-prev");
const buttonRandom = document.getElementById("btn-random");

let currentItem = 0;
let RandomItem = 0;

window.addEventListener("DOMContentLoaded",()=>{
    showItem();
})
buttonNext.addEventListener("click",()=>{
    currentItem++
    if(currentItem === reviews.length){
        currentItem = 0;
    }
    showItem()

})
buttonPrev.addEventListener("click",()=>{
    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showItem();

})
function showItem(){
    const item = reviews[currentItem];
    img.style.background = item.img;
    nameEl.textContent = item.name;
    profession.textContent = item.profession;
    description.textContent = item.description;
}
function randomItem(Item){
    RandomItem = Item
}
buttonRandom.addEventListener("click",()=>{
    currentItem = Math.floor(Math.random() * reviews.length);
    if(currentItem){

    }
    showItem();
})
