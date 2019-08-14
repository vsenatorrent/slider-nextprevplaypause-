// var li = document.querySelectorAll('li'),
//     index = 0,
//     interval;
// //var interval = setInterval(anim, 1000);


// function anim(n) {
//   li[index].className = 'slide';
//   index = (n + li.length) % li.length;
//   li[index].className = 'slide showing';
// }

// var pp = document.querySelector('.playpause');
// var a = true;
// function playstop(){
//   if (a) {
//     interval = setInterval(next1, 1000);
//     pp.innerHTML = 'pause';
//     a = false;
//   } else {
//     clearInterval(interval);
//     pp.innerHTML = 'play';
//     a = true;
//   }
// }
// pp.onclick = playstop;

// var prev = document.querySelector('.prev'),
//     next = document.querySelector('.next');

// function next1(){
//   anim(index+1);
// }
// function prev1(){
//   anim(index-1);
// }

// next.onclick = next1;
// prev.onclick = prev1;

const sliderPlay = document.querySelector('.playpause');
const sliderNext = document.querySelector('.next');
const sliderPrev = document.querySelector('.prev');
const arraySlides = [...document.querySelectorAll('.slide')];
let timer;

function displaySlide(stop, updateIndex, event){
  if(stop){
    clearInterval(timer);
  }
  // let currentSlideIndex;
  // arraySlides.forEach((slide,index) => {
  //   currentSlideIndex = slide.classList.contains('showing') ? index : currentSlideIndex;
  //   slide.classList.remove('showing');
  // })
  const currentSlideIndex = arraySlides.reduce((acc, current, index) => {
    return current.classList.contains('showing') ? index : acc;
  }, 0)
  arraySlides[currentSlideIndex].classList.remove('showing');
  const nextSlideIndex = ((updateIndex(currentSlideIndex) + arraySlides.length) % arraySlides.length);
  // if(nextSlideIndex > arraySlides.length - 1) {
  //   nextSlideIndex = 0;
  // }
  arraySlides[nextSlideIndex].classList.add('showing');
}

const increment = (n) => ++n;
const decrement = (n) => --n;

sliderNext.addEventListener('click', displaySlide.bind(null, true, increment))

sliderPrev.addEventListener('click', displaySlide.bind(null, true, decrement))

sliderPlay.addEventListener('click', function(){
  timer = setInterval(displaySlide.bind(null, false, increment), 1000);
})
