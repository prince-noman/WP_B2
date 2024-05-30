// console.log(document);
// console.log(typeof document);
// console.log(document.title)
// document.title = "JS DOM";
// console.log(document.all)

// GET ELEMENT BY ID
// const header = document.getElementById("header");
// console.log(header);
// header.innerText = "PHP Class"
// let a = header.innerHTML
// let a = header.innerText
// let a = header.textContent
// console.log(a);
// header.textContent = "C++ Class"

// Style font-size X
// header.style.color = "red"
// header.style.fontSize = "50px"

// GET ELEMENTS BY Class
// const items = document.getElementsByClassName("items");
// console.log(items);

// for (let i = 0; i < items.length; i++) {
//     items[i].style.color = "red";
// }



// Get Element By TagName
// const h1 = document.getElementsByTagName("h1");
// console.log(h1);

// Get Element By QuerySelector
// const header = document.querySelector("#header");
// console.log(header);

// let lastItem = document.querySelector(".items:last-child");
// let lastItem = document.querySelector(".items:nth-child(2)");
// console.log(lastItem.style.color = "red");

// Get Element By QuerySelectorAll

// const items = document.querySelectorAll(".items");
// console.log(items);


// Top to Bottom Access
// const ul = document.querySelector("#item");
// const child = ul.children
// console.log(child);

// Bottom to Top Access
// const child = document.querySelectorAll(".itemč");
// const ul = child[0].parentElement
// console.log(ul);


//Creating an Element
// const divElement = document.createElement("div");
// console.log(divElement);
// divElement.className = "box"
// divElement.setAttribute("id", "main")
// console.log(divElement);


// Insert element
// const container = document.querySelector("#container");
// const divElement = document.createElement("div");
// divElement.innerText = "Hello";
// container.appendChild(divElement);


//Event Listeners

// const btn = document.querySelector("#btn");
// console.log(btn);
// btn.addEventListener("click", function(e){
//     console.log(e);
// })

// btn.addEventListener("mouseover", function(){
//     console.log("Mouse Over");
// })

// const inputElement = document.getElementById("input");
// console.log(inputElement);
// inputElement.addEventListener('keyup', function(){
//     console.log(inputElement.value)
// })


// inputElement.addEventListener('focus', function(){
//     console.log("Input Focus")
// })

// inputElement.addEventListener('blur', function(){
//     console.log("Input Blur")
// })

// inputElement.addEventListener('copy', function(){
//     console.log("Input Copy")
// })

// inputElement.addEventListener('cut', function(){
//     console.log("Input Cut")
// })


// inputElement.addEventListener('paste', function(){
//     console.log("Input Paste")
// })

// document.querySelector('form').addEventListener('submit', function(event){
//     event.preventDefault();
//     console.log(inputElement.value);
// })