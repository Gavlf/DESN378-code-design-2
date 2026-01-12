// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
myHeading.textContent = "J   E   N   N   I   E";
// Store a reference to the <img> in a variable
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/jennie-1.jpg") {
    myImage.setAttribute("src", "images/jennie-2.jpg");
  } else {
    myImage.setAttribute("src", "images/jennie-1.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `J   E   N   N   I   E, ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `J   E   N   N   I   E, ${storedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();
});
