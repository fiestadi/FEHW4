let images = [
  'image',
  'image1',
  'image2', 
];
let smallImages = document.querySelectorAll('.small-images img');
let bigImage = document.querySelector('.big-image img');


smallImages.forEach(smallImage => {
  smallImage.addEventListener('click', () => {
    bigImage.src = smallImage.src;
  });
});