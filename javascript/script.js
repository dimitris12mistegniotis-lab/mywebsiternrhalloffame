
const navbar = document.getElementById('navbar');


let lastScrollTop = 0;


window.addEventListener('scroll', function() {
  
  
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // If the current scroll is GREATER than the last scroll, they are scrolling DOWN
    navbar.classList.add('nav-hidden');
  } else {
    // If the current scroll is LESS than the last scroll, they are scrolling UP
    navbar.classList.remove('nav-hidden');
  }
  
  // Update the last scroll position to the new current position
  // (The <= 0 check prevents a bug on mobile phones when "bounce" scrolling at the top)
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {
    // If the element is visible on the screen...
    if (entry.isIntersecting) {
      // Add the 'show' class to trigger the CSS animation
      entry.target.classList.add('show');
    } else {
      // OPTIONAL: Remove the class when you scroll past it, 
      // so it animates again when you scroll back up!
      entry.target.classList.remove('show');
    }
  });
});

// 2. Grab all the elements with the class 'hidden'
const hiddenElements = document.querySelectorAll('.hidden');

// 3. Tell the observer to watch each of those elements
hiddenElements.forEach((el) => observer.observe(el));

// Start at the first image (Index 0)
let currentIndex = 0; 

// Grab all the images inside the carousel
const slides = document.querySelectorAll('.carousel-image'); 

function changeSlide(direction) {
  // 1. Remove the 'active' class from the current image
  slides[currentIndex].classList.remove('active');

  // 2. Calculate the new index based on the button clicked (-1 or +1)
  currentIndex = currentIndex + direction;

  // 3. Loop back around if we go past the end or beginning
  if (currentIndex >= slides.length) {
    currentIndex = 0; // Go back to the first image
  } else if (currentIndex < 0) {
    currentIndex = slides.length - 1; // Go to the last image
  }

  // 4. Add the 'active' class to the new current image
  slides[currentIndex].classList.add('active');
}