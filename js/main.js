let i = 0;
let images = [];
let time = 3000;

images[0] = './images/banner-slider-1.png';
images[1] = './images/banner-slider-2.png';

function changeImg(){
  document.slide.src = images[i];
if(i < images.length -1 ){
i++;
}
else{
  i = 0;
}
setTimeout("changeImg()", time);
}

window.onload = changeImg;

if(screen.width >=576){
  document.laptop.src = './images/laptop-pointer.png';
}

