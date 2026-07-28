function initCarousel(carousel){
  const track=carousel.querySelector('.carousel-track');
  const slides=carousel.querySelectorAll('.carousel-track img');
  let index=0;
  function update(){track.style.transform=`translateX(-${index*100}%)`;}
  function move(step){index=(index+step+slides.length)%slides.length;update();}
  carousel.querySelectorAll('.carousel-btn.prev').forEach(b=>b.addEventListener('click',()=>move(-1)));
  carousel.querySelectorAll('.carousel-btn.next').forEach(b=>b.addEventListener('click',()=>move(1)));
  setInterval(()=>move(1),5000);
}
window.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.carousel').forEach(initCarousel);
});
