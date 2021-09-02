const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const slider = document.querySelector(".carousel-slider");
const carousel = document.querySelector(".carousel");
let direction = -1;

prev.addEventListener('click',()=>{
    if(direction === -1){
        direction = 1;
        slider.appendChild(slider.firstElementChild)
    }
    slider.style.transform = "translate(100vw)";
    slider.style.transition = "all 0.4s";
    slider.style.filter = "opacity(0.2) blur(5px)";
    carousel.style.justifyContent = 'flex-end';
    setTimeout(()=>{
        slider.style.filter = "opacity(1) blur(0)";
    },200)
})


next.addEventListener('click',()=>{
    if(direction === 1){
        direction = -1;
        slider.prepend(slider.lastElementChild)
    }
    slider.style.transform = "translate(-100vw)";
    slider.style.transition = "all 0.4s";
    slider.style.filter = "opacity(0.2) blur(5px)";
    carousel.style.justifyContent = 'flex-start';
    setTimeout(()=>{
        slider.style.filter = "opacity(1) blur(0)";
    },200)
})

slider.addEventListener('transitionend', function() {    
    if (direction === 1) {
      slider.prepend(slider.lastElementChild);
    } else {
      slider.appendChild(slider.firstElementChild);
    }

    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(() => {
      slider.style.transition = 'all 0.5s';
    })
  }, false);