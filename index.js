

let target = document.body;

function changeBackgroundColor() {
   target.style.background = getRandomColor();
   setTimeout(changeBackgroundColor,1000);
}

function getRandomColor(){
   const LIMIT_VALUE = 256;
   let red = getRandomNumber(LIMIT_VALUE);
   let green = getRandomNumber(LIMIT_VALUE);
   let blue = getRandomNumber(LIMIT_VALUE);
   return 'rgb('+red+','+green+','+blue+')'
}
function getRandomNumber(limitValue){
let randomNumber = Math.random();
randomNumber = randomNumber*limitValue;
randomNumber = Math.floor(randomNumber);
return randomNumber;

}
changeBackgroundColor();

