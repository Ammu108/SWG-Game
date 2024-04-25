const snakeImg = document.getElementById("snake-img");
const waterImg = document.getElementById("water-img");
const gunImg = document.getElementById("gun-img");

const images = document.querySelectorAll(".img");
const computerSelectedImages = document.getElementById("go-btn")
const result_win = document.getElementById("result");
const refreshTheGame = document.getElementById("playAgain-btn")

let storedValue = "";
let computerValue = "";

images.forEach(function(image){
  image.addEventListener('click', function(){
    storedValue = image.alt;
    document.getElementById("user-input").value = storedValue;
  } )
})

const options = ['Snake', 'Water', 'Gun'];

function getRandomIndex(options){
  return Math.floor(Math.random() * options.length);
}
let element = 0;
element = getRandomIndex(options);
const randomElement = options[element];

computerSelectedImages.addEventListener('click', function(){
  computerValue = randomElement;
  document.getElementById("comp-input").value = computerValue;

  checkConditions();
})

function checkConditions() {
  if (storedValue === computerValue) {
    // alert("match draw");
    result_win.classList.remove('hidden');
    result_win.innerHTML = "Oops, Match Draw";
    result_win.style.background = "yellow";
  } else {
    if (storedValue === "Snake") {
      // water , gun
      let userwin = true;
      userwin = computerValue === "Gun" ? false : true;
       if (userwin) {
        //   alert("you win");
         result_win.classList.remove('hidden');
         result_win.innerHTML = "Congratulations, You Win";
         result_win.style.background = "green";
         ;
        } else {
        //   alert("you loose");
         result_win.classList.remove('hidden');
         result_win.innerHTML = "Sorry, You loose";
         result_win.style.background = "red";
        }

    }if (storedValue === "Water") {
      // snake , gun
      userwin = computerValue === "Snake" ? false : true;
      if (userwin) {
        // alert("you win");
        result_win.classList.remove('hidden');
        result_win.innerHTML = "Congratulations, You Win";
         result_win.style.background = "green";

      } else {
        // alert("you loose");
        result_win.classList.remove('hidden');
        result_win.innerHTML = "Sorry, You loose";
        result_win.style.background = "red";

      }
    }else if  (storedValue === "Gun") {
      // snake , water
      userwin = computerValue === "Water" ? false : true;
      if (userwin) {
        // alert("you win");
        result_win.classList.remove('hidden');
        result_win.innerHTML = "Congratulations, You Win";
        result_win.style.background = "green";
      } else {
        // alert("you loose");
        result_win.classList.remove('hidden');
        result_win.innerHTML = "Sorry, You loose";
        result_win.style.background = "red";
      }
    }
  }
}

refreshTheGame.addEventListener('click', function() {
  let again = confirm("Do you want to play again.");
  if (again) {
    location.reload();
  }
  else {
    location.reload();
    alert(`Thankyou for playing this game. \nWill see you soon.`);
  }
})