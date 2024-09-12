document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevButton = document.querySelector('.prev-testimonial');
  const nextButton = document.querySelector('.next-testimonial');
  let currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  // Show the first slide initially
  showSlide(0);

  // Auto-rotate slides every 5 seconds
  setInterval(nextSlide, 5000);
});