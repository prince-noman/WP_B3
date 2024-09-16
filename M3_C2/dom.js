// console.log(document);
// console.log(typeof document);
// document.title = "DOM Practice";
// console.log(document.all);

// GET ELEMENT BY ID
const title = document.getElementById("title");
// console.log(title);
// console.log(title.innerText);
// console.log(title.textContent);
// console.log(title.innerHTML);
// title.innerText = "DOM Practice";

// styling
// title.style.color = "red";
// title.style.backgroundColor = "black";
// title.style.fontSize = "50px";
// background-color, font-size

// GET ELEMENTS BY CLASSNAME
// const items = document.getElementsByClassName("item");
// console.log(items);
// for (const li of items) {
//   li.style.color = "red";
// }

// GET ELEMEMT BY TAGNAME
// const header =document.getElementsByTagName("h1");
// console.log(header);

// GET ELEMENT BY QUERYSELECTOR
// const header = document.querySelector("#title");
// console.log(header);
// header.textContent = "PHP";

// GET ELEMENTS BY QUERYSELECTORALL
// const items = document.querySelectorAll(".item");
// const lastItem = document.querySelectorAll(".item:last-child");
// console.log(items);
// console.log(lastItem);
// for (const li of items) {
//   li.style.color = "red";
// }

// Top to Bottom
// const ul = document.querySelector(".items");
// const li = ul.children;
// console.log(ul);
// console.log(li);

// Bottom to Top
// const child = document.querySelectorAll(".item");
// const parent = child[0].parentElement;
// console.log(parent);

// const li = document.querySelectorAll(".item:first-child");
// console.log(li);
// const ul = li[0].closest(".items");
// console.log(ul);

// Creating an element
// const divElement = document.createElement("div");
// console.log(divElement);

// Adding class
// divElement.className = "box";
// Adding Attributes
// divElement.setAttribute("id", "box-id");
// console.log(divElement);

// Insert Element
// const container = document.querySelector("#container");
// const divElement = document.createElement("div");
// divElement.innerHTML = "<h1>We are learning JS DOM</h1>";
// container.appendChild(divElement);

// Event Listener
// const btn = document.querySelector("#btn");
// console.log(btn);
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//     console.log(e);
//   console.log("CLicked");
// });

// btn.addEventListener("mouseover", function () {
//   console.log("hovered");
// });

// const inputElement = document.querySelector("#input");
// inputElement.addEventListener("keyup", (e) => {
//   console.log(inputElement.value);
// });

// inputElement.addEventListener("focus", (e) => {
//     console.log("Input Focus");
//   });

// inputElement.addEventListener("blur", (e) => {
//   console.log("Input Blur");
// });

// inputElement.addEventListener("copy", (e) => {
//   console.log("Input Copy");
// });

// inputElement.addEventListener("cut", (e) => {
//   console.log("Input Cut");
// });

// inputElement.addEventListener("paste", (e) => {
//   console.log("Input Paste");
// });

// document.querySelector("form").addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log(inputElement.value);
// });
