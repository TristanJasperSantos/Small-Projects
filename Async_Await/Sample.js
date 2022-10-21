// JavaScript Object
let stocks = {
    fruits: ["Banana","Apple","Orange"],
    liquid: ["Water","Ice"],
    holder: ["cone","cup","stick"],
    toppings: ["chocolate","peanuts"]
}

//JSON means Javascript Object Notation
{
    "fruits": ["Banana","Apple","Orange"],
    "liquid": ["Water","Ice"],
    "holder": ["cone","cup","stick"],
    "toppings": ["chocolate","peanuts"]
}

// let is_shop_open = true;

// function time(ms){
//     return new Promise((resolve, reject)=>{
//         if (is_shop_open){
//             setTimeout(resolve,ms)
//         }else{
//             reject(console.log("shop is closed"))
//         }
//     })
// }
// async function kitchen(){
//     try{
//         await time(2000)
//         console.log(`${stocks.fruits[0]} was selected`)

//         await time(2000)
//         console.log(`${stocks.liquid[1]} was selected`)
//     }

//     catch(error){
//         console.log("customer left.",error)
//     }
//     finally{
//         console.log("day ended, customer left.")
//     }
// }

// kitchen();