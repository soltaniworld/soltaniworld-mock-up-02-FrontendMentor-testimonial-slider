const btnNext = document.querySelector(".media-nav__btn--right");
const btnPrev = document.querySelector(".media-nav__btn--left");

const slides = document.querySelectorAll(".slides");

let index = 1

// Hide all quotes
slides.forEach((slide)=>{
  if (slide.classList.contains('slide-2')){
    console.log(slide);
    slide.classList.add("ease-out")
    setTimeout(()=>{slide.classList.add("hide")}, 500)
    
  }
});

btnNext.addEventListener('click', ()=>{
  changeSlide(index)
  quote.classList.toggle("ease-out");
});

function changeSlide(i){
  if (i==1){
    index = 2;
  }
  else{
    index = 1;
  }
};