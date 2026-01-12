// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
myHeading.textContent = "J  E  N  N  I  E";
// Store a reference to the <img> in a variable
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/placeholder-1.jpg") {
    myImage.setAttribute("src", "images/placeholder-2.jpg");
  } else {
    myImage.setAttribute("src", "images/placeholder-1.jpg");
  }
});

