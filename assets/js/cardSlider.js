let scrollPerClick;
let scrollAmount1 = 0;
let scrollAmount2 = 0;
let scrollAmount3 = 0;


scrollPerClick = 220;

function slideLeft (para,num) {
  let cls = "slider-"+num
  let scrollAmount = para
  let sliders = document.querySelector(`.${cls}`);

  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });
  if (scrollAmount < 0) {
    scrollAmount = 0;
  }

  return scrollAmount;
}

function slideRight(para,num) {
  let cls = "slider-"+num;
  let scrollAmount = para
  let sliders = document.querySelector(`.${cls}`);

  if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
  }

  return scrollAmount
}

function prevCard(para) {

  switch(para){
    case 1:
      scrollAmount1 =  slideLeft(scrollAmount1,para);
      break;
    case 2:
      scrollAmount2 = slideLeft(scrollAmount2,para);
      break;
    case 3:
      scrollAmount3 = slideLeft(scrollAmount3,para);
      break;
  }
}

function nextCard(para) {
  switch(para){
    case 1:
      scrollAmount1 =  slideRight(scrollAmount1,para);
      break;
    case 2:
      scrollAmount2 = slideRight(scrollAmount2,para);
      break;
    case 3:
      scrollAmount3 = slideRight(scrollAmount3,para);
      break;
  }
}