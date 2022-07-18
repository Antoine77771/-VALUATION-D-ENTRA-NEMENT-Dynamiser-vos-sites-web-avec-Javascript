const btnNewGame = document.getElementById('btnNewGame');
const btnRollDice = document.getElementById('btnRollDice');
const btnHold = document.getElementById('btnHold');
const scoreNowJ1 = document.getElementById('scoreNowJ1');
const scoreNowJ2 = document.getElementById('scoreNowJ2');
const scoreCurrentJ1 = document.getElementById('scoreCurrentJ1');
const scoreCurrentJ2 = document.getElementById('scoreCurrentJ2');

function newGame() {
 btnNewGame.addEventListener('click', () => {
    scoreNowJ1.innerHTML = 0;
    scoreCurrentJ1.innerHTML = 0;
    scoreNowJ2.innerHTML = 0;
    scoreCurrentJ2.innerHTML = 0;
    
  });
}
newGame();

const lanceDe = function () {
   const nbDecimal = (Math.random() * 6) + 1;
   const nb = Math.trunc(nbDecimal);
   return nb;
}

const clickSurBtn = function () {
   const result = lanceDe()
   scoreNowJ1.textContent = result
   
}

btnRollDice.addEventListener('click', clickSurBtn);