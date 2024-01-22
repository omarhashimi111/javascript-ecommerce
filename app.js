// variables

const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const productImg = document.querySelector(".productImg");
const title = document.querySelector(".productTitle");
const price = document.querySelector(".productPrice");
const productButton = document.querySelector(".productButton")
const closeButton = document.querySelector(".close");
const payButton = document.querySelector(".payButton");
const payment = document.querySelector(".payment");



const productArray = [
    {
        id: 1 ,
        title: "Breitling 32x",
        price: 300,
        img: "./images/br.png"
    },{
        id: 2 ,
        title: "Cartier",
        price: 400,
        img: "./images/cartier.png"
    },
    {
        id: 3 ,
        title: "IWC",
        price: 400,
        img: "./images/iwc.png"
    },
    {
        id: 4 ,
        title: "OMEGA",
        price: 999,
        img: "./images/omega.png"
    },
    {
        id: 5 ,
        title: "Rolex",
        price: 1899,
        img: "./images/rolex.png"
    },{
        id: 6 ,
        title: "Citizen",
        price: 1299,
        img: "./images/citizen.png"
    }
]

let choosenProduct = productArray[0]

menuItems[0].style.color = "orange"
menuItems[0].style.fontWeight = "600"

menuItems.forEach((item, index) => {
    item.addEventListener("click",()=>{
        //change the style of active one
        menuItems.forEach(item =>{
            item.style.color = "lightgray"
        item.style.fontWeight = "400"

        })
        item.style.color = "orange"
        item.style.fontWeight = "600"


        // change the slider
        wrapper.style.transform = `translateX(${index * -100}vw)`

        // change the choosen product
        choosenProduct = productArray[index]

        // change the product img price and title

        productImg.src = choosenProduct.img;
        title.innerHTML = choosenProduct.title;
        price.innerHTML = `$${choosenProduct.price}`;
        
    })
})


productButton.addEventListener("click",()=>{
    payment.style.display = "flex"
})

closeButton.addEventListener("click",()=>{
    payment.style.display = "none"
})

