let currentSlide=0;
const slides = document.querySelectorAll(".slide");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

// Function for NextButton
function next(){
  let nextSlide = (currentSlide+1) % slides.length;
  slides[currentSlide].style.display = 'none';
  slides[nextSlide].style.display = 'block';
  currentSlide = nextSlide;
}

// Add Event Listener For next function
nextButton.addEventListener('click',next);


// Function for prevButton
function prev(){
  let prevSlide = (currentSlide==0) ? slides.length-1 : currentSlide-1;
  slides[currentSlide].style.display = 'none';
  slides[prevSlide].style.display = 'block';
  currentSlide = prevSlide;
}

// Add Event Listener For next function
prevButton.addEventListener('click',prev);

setTimeout(next, 5000);