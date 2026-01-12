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

const myButton = document.querySelector("button");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (myName) {
    localStorage.setItem("name", myName);
    const spacedName = myName.toUpperCase().split('').join('   ');
    myHeading.innerHTML = `J   E   N   N   I   E  <span style="font-size: 0.8em; padding: 0 0.5em;">&</span> ${spacedName}`;
  } else {
    myHeading.textContent = "J   E   N   N   I   E";
  }
}
if (localStorage.getItem("name")) {
  const storedName = localStorage.getItem("name");
  const spacedName = storedName.toUpperCase().split('').join('   ');
  myHeading.innerHTML = `J   E   N   N   I   E  <span style="font-size: 0.8em; padding: 0 0.5em;">&</span>  ${spacedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();
});

/*
  SUMMARY:
  This file does two things:
  1. Shows promotional visuals of Jennie for her song that change when clicked.
  2. Displays Jennie's name along with the user's name in a stylized format, playing off the song title "You & Me".

  The key pattern I learned: Java is similar to Python in the way that it's functions say exactly what they do for the most part.
*/
