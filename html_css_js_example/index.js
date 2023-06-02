let button = document.getElementById("button-1");

// New ES6 Syntax
const clickFunction = () => {
  console.log("hello");
};
button.addEventListener("dblclick", clickFunction);

let button2 = document.getElementById("button-2");
button2.addEventListener("click", oldSchoolClickFunction);

function oldSchoolClickFunction() {
  console.log("Old school syntax");
}

// button.addEventListener("click", (e) => {
//     // alert("Clicked button")
//     console.log(e)
//     console.log("hello")
// })

const proof = () => {
  console.log("this file has loaded");
};

proof();

// Dynamically added elements to the screen

const addPToScreen = () => {
  const body = document.querySelector("body");

  let newPtag = document.createElement("p");
  newPtag.innerText = "This was dynamically created by javascript";

  body.append(newPtag);
};

const button3 = document.getElementById("button-3");
button3.addEventListener("click", addPToScreen);
