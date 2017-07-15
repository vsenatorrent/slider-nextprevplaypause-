var li = document.querySelectorAll('li'),
    index = 0,
    interval;
//var interval = setInterval(anim, 1000);


function anim(n) {
  li[index].className = 'slide';
  index = (n + li.length) % li.length;
  li[index].className = 'slide showing';
}

var pp = document.querySelector('.playpause');
var a = true;
function playstop(){
  if (a) {
    interval = setInterval(next1, 1000);
    pp.innerHTML = 'pause';
    a = false;
  } else {
    clearInterval(interval);
    pp.innerHTML = 'play';
    a = true;
  }
}
pp.onclick = playstop;

var prev = document.querySelector('.prev'),
    next = document.querySelector('.next');

function next1(){
  anim(index+1);
}
function prev1(){
  anim(index-1);
}

next.onclick = next1;
prev.onclick = prev1;