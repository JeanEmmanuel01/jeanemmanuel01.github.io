let index=0,slides,track;
window.addEventListener('DOMContentLoaded',()=>{
  slides=document.querySelectorAll('#expense-carousel .carousel-track img');
  track=document.querySelector('#expense-carousel .carousel-track');
  setInterval(()=>{moveSlide(1);},5000);
});
function moveSlide(step){index=(index+step+slides.length)%slides.length;updateCarousel();}
function updateCarousel(){track.style.transform=`translateX(-${index*100}%)`;}