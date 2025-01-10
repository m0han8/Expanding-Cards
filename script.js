function exp(event) {
  const images = document.querySelectorAll('.cards img');
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('exp');
