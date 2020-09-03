const btnNext = document.querySelector(".media-nav__btn--right");
const btnPrev = document.querySelector(".media-nav__btn--left");

const slides = document.querySelectorAll(".slides");

let slideIndex = 1
let slideLength = findSlideLength(slides);
let slideShowTime = 5000
let playInterval

showSlide(slideIndex);
autoPlay();

btnNext.addEventListener('click', ()=>{
  clearInterval(playInterval);
  autoPlay();
  changeSlideIndex(+1);
  showSlide(slideIndex);
});
btnPrev.addEventListener('click', ()=>{
  clearInterval(playInterval);
  autoPlay();
  changeSlideIndex(-1);
  showSlide(slideIndex);
});


function changeSlideIndex(i){
  slideIndex += i
  if (slideIndex > slideLength ){
    slideIndex = slideLength;
  }
  else if (slideIndex < 1){
    slideIndex = 1;
  }
}
function showSlide(i){
  slides.forEach((slide)=>{
    if (slide.classList.contains(`slide-${i}`)){
      slide.classList.add("ease-in");
      slide.classList.remove("ease-out"); 
    }
    else{
      slide.classList.remove("ease-in");
      slide.classList.add("ease-out");
    }
});
}

//find number of slides available
function findSlideLength(slides){
  let length = 0
  slides.forEach((slide)=>{
    slide.classList.forEach((e)=>{
      if (e.startsWith('slide-')){
        let i = Number(e.slice('slide-'.length))
        if (i > length){
          length = i;
        }
      }
    })
  })
  return length;
}

// set interval to auto change slide
function autoPlay(){
  playInterval = setInterval(()=>{
    showSlide(slideIndex);
    slideIndex+=1;
    if (slideIndex > slideLength){
      slideIndex = 1;
    }
  }, slideShowTime);
}