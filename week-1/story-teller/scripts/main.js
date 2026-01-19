// Find elements
const image = document.querySelector('.story-image img');
const header = document.querySelector('.story-header');
const title= document.querySelector('#story-title');


// Define variables
const totalImages = 5;  

// Track current step
let currentStep = 0;

// Change title color on image hover
image.addEventListener('mouseenter', function() {
  title.style.color = '#c6341d';
});

image.addEventListener('mouseleave', function() {
  title.style.color = 'white';
});

// Interactive clicks on image to advance story
image.addEventListener('click', function() {
  currentStep++;
  if (currentStep < totalImages) {
      // Fade out
    image.style.opacity = '0';
    
    setTimeout(function() {
      image.onload = function() {
        header.style.display = 'none';
        image.style.opacity = '1';
      };
      
      // Update image
      image.src = `images/image${currentStep + 1}.jpg`;
    }, 500);
  }
});
