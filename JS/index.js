var text = ["Programmer Front End", "Desiner", "Programmer Back End" , "Web Developer"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 2000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}


//      Home 
const home = document.querySelector('.home');
home.addEventListener('click',homeHandler)
function homeHandler(){
  about.classList.add(' display')
}

//      About 

const aboutBtn = document.querySelector('#about');
const about = document.querySelector('.about');
const bottemColor = document.querySelector('.bottem-about')

aboutBtn.addEventListener('click' , aboutHandler)
function aboutHandler(){
  about.classList.toggle('display')
  bottemColor.classList.toggle('border-color-about')
}


//     Skills
//      Css

//      Html

//      Javascript

//      Git

//      Bootstrap