
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var tom1;
var tom2;
var tom3;
var tom4;
var snare;
var crash;
var kick;
var allSound =[];



for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    changeBackground(buttonInnerHTML);
  });
}


document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
  changeBackground(event.key);
});


///////////   "play all together " logic ///////////////
function playTheSound(i){
  allSound[i].play();
}
document.querySelector(".all").addEventListener("click",function(){
  let n=allSound.length;
  if(n==0) return;
  let i=0;
  timeOutId = setInterval(()=>{
    playTheSound(i);
    i++;
    if(i==n){
      clearInterval(timeOutId);
    }
  },300);
});



////////////   reset button logic   ////////////
document.querySelector(".reset").addEventListener("click",function(){
  allSound.length=0;
});


function makeSound(key) {
  switch (key) {
    case "w":
      tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      allSound.push(tom1);
      break;

    case "a":
      tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      allSound.push(tom2);
      break;

    case "s":
      tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      allSound.push(tom3);
      break;

    case "d":
      tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      allSound.push(tom4);
      break;

    case "j":
      snare = new Audio('sounds/snare.mp3');
      snare.play();
      allSound.push(snare);
      break;

    case "k":
      crash = new Audio('sounds/crash.mp3');
      crash.play();
      allSound.push(crash);
      break;

    case "l":
      kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      allSound.push(kick);
      break;

    default: console.log(key);

  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

function changeBackground(currentKey) {
  var bodyClass = document.querySelector(".background");
  bodyClass.classList.add(currentKey +"-"+"change-background");
  setTimeout(function() {
    bodyClass.classList.remove(currentKey +"-"+"change-background");
  }, 200);
}