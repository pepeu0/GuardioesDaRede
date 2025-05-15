

let lastIndex = 0;
const boxes = document.querySelectorAll(".box-profile");
const prev = document.getElementById('prev');
const next = document.getElementById('next');

boxes.forEach((box, index) => {
  box.style.opacity = index === 0 ? 1 : 0;
});

next.addEventListener('click', () => {
  boxes[lastIndex].style.opacity = 0;
  lastIndex = (lastIndex + 1) % boxes.length;
  boxes[lastIndex].style.opacity = 1;

  
});
 
prev.addEventListener('click', () => {
  boxes[lastIndex].style.opacity = 0;
  
  lastIndex = (lastIndex - 1 + boxes.length) % boxes.length;
  document.querySelector('.content-profile').classList.add('active-content')
  boxes[lastIndex].style.opacity = 1;
 

});