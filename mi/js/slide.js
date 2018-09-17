let slideUl = document.querySelector('.main-slide ul');
let slidePre = document.querySelector('.slide-pre');
let slideNext = document.querySelector('.slide-next');
let liAry = document.querySelectorAll('.slide-click ul li');
let i = 0;
let key = 0;
// 前播
slidePre.addEventListener('click',function () {
  
  if (slideUl.classList[0] === undefined){
    slideUl.classList.add('slide-tran');
  }
  i--;
  key--;
  if (key === -1){
    key = 5;
  }
  for (let i = 0;i<liAry.length;i++){
    liAry[i].classList.remove('slide-active')
  }
  liAry[key].classList.add('slide-active');
  slideUl.style.transform = `translateX(${-1226*i}px)`;
  for (let i = 0;i<liAry.length;i++){
    liAry[i].classList.remove('slide-active')
  }
  liAry[key].classList.add('slide-active');
  if (i === -1){
    slideUl.classList.remove('slide-tran');
    i = 6;
    key = 6;
    slideUl.style.transform = `translateX(${-1226 * 5}px)`;

  }
});
//想后划
slideNext.addEventListener('click',function () {
  
  if (slideUl.classList[0] === undefined){
    slideUl.classList.add('slide-tran');
  }
  key++;
  i++;
  slideUl.style.transform = `translateX(${-1226 * i}px)`;
  if (key === 6){
    key = 0;
  }
  for (let i = 0;i<liAry.length;i++){
    liAry[i].classList.remove('slide-active')
  }
  liAry[key].classList.add('slide-active');
  if (i === 6){
    slideUl.classList.remove('slide-tran');
    i = 0;
    slideUl.style.transform = `translateX(0px)`;
  }
});

let timeId = setInterval(autoplay(),3000);
slideUl.addEventListener('mouseenter',function () {
  clearInterval(timeId);
});
slideUl.addEventListener('mouseleave',function () {
  timeId = setInterval(autoplay,3000);
});
function autoplay() {
    if (slideUl.classList[0] === undefined){
      slideUl.classList.add('slide-tran');
    }
    i++;
    key++;
    slideUl.style.transform = `translateX(${-1226 * i}px)`;

    if (key === 6){
      key = 0;
    }
    for (let i = 0;i<liAry.length;i++){
      liAry[i].classList.remove('slide-active')
    }
    liAry[key].classList.add('slide-active');
    // console.log(liAry + '--------'+key);
    if (i === 6){
      slideUl.classList.remove('slide-tran');
      i = 0;
      slideUl.style.transform = `translateX(0px)`;
    }
}