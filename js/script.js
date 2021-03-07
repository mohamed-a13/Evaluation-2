let btnRoll = document.querySelector('.btn-roll');
let btnHold = document.querySelector('.btn-hold');
let btnNew = document.querySelector('.btn-new');

let player1 = document.getElementById('score-1');
let current1 = document.getElementById('current-1');
let player2 = document.getElementById('score-2');
let current2 = document.getElementById('current-2');

let scorePlayer1 = 0;
let scoreC1 = 0;
let scorePlayer2 = 0;
let scoreC2 = 0;
let isPlaying = true;

let playerActive1 = document.getElementById('playerActive-1');
let playerActive2 = document.getElementById('playerActive-2');
let name1 = document.querySelector('.name-1');
let name2 = document.querySelector('.name-2');


/* boutton roll */
btnRoll.addEventListener('click', rollDice);

function rollDice(){
  let dice = Math.floor(Math.random() * 6 + 1);
  let diceEl = document.querySelector('.dice');
  diceEl.src = `images/dice-${dice}.png`;

  if(isPlaying === true){
  scoreC1 +=dice;
    if(dice !== 1){
      current1.textContent = scoreC1;
    }else{
      switchPlayer();
    }
  }else{ //ajouter
    scoreC2 +=dice;
    if(dice !== 1){
      current2.textContent = scoreC2;
    }else{
      switchPlayer();
    }
  }
};
/* boutton roll */


/* boutton hold */
btnHold.addEventListener('click', hold);

function hold(){
  if(isPlaying === true){
    scorePlayer1 += scoreC1
    player1.textContent = scorePlayer1;
    scoreC1 = 0;
    current1.textContent = scoreC1;
    winner();
    switchPlayer();
  }else{
    scorePlayer2 += scoreC2
    player2.textContent = scorePlayer2;
    scoreC2 = 0;
    current2.textContent = scoreC2;
    winner();
    switchPlayer();
  }
}
/* boutton hold */


/* switch player */
function switchPlayer(){
  if(isPlaying === true){
    scoreC1 = 0;
    current1.textContent = scoreC1;
    isPlaying = false;
    playerActive2.style.display = "block";
    playerActive1.style.display = "none";
  }else if(isPlaying === false){
    scoreC2 = 0;
    current2.textContent = scoreC2;
    isPlaying = true;
    playerActive2.style.display = "none";
    playerActive1.style.display = "block";
  } 
}
/* switch player */


/* boutton new game */
btnNew.addEventListener('click', newGame);

function newGame(){
  isPlaying = true;
  scoreC1 = 0;
  scorePlayer1 = 0;
  current1.textContent = scoreC1;
  player1.textContent = scorePlayer1;
  name1.textContent = "PLAYER 1";
  name2.textContent = "PLAYER 2";
  name1.style.color = "black"
  name2.style.color = "black"
  scoreC2 = 0;
  scorePlayer2 = 0;
  current2.textContent = scoreC2;
  player2.textContent = scorePlayer2;

  playerActive2.style.display = "none";
}
/* boutton new game */

function winner(){
  if(scorePlayer1 >= 100){
    name1.textContent = "WINNER!!!";
    name1.style.color = "green";
  }else if(scorePlayer2 >= 100) {
    name2.textContent = "WINNER!!!";
    name2.style.color = "green";
  }
}
