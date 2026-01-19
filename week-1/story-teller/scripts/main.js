// Track current step
let currentStep = 0;

// Interactive clicks on image to advance story
image.addEventListener('click', function() {
  currentStep++;
  if (currentStep < captions.length) {
    // Update caption
    caption.textContent = captions[currentStep];
    // Update image
    image.src = `images/man-run${currentStep + 1}.jpg`;
    image.setAttribute('data-step', currentStep + 1);
  }
});
​