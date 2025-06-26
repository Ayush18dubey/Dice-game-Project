"use strict";

let Player1 = document.querySelector(".player.player--0");
let Player2 = document.querySelector(".player.player--1");
console.log(Player1);

let player1scoreEl = document.querySelector("#score--0");
let player2scoreEl = document.querySelector("#score--1");

let  current1scoreEl = document.querySelector("#current--0");
let  current2scoreEl = document.querySelector("#current--1");

let  diceEl = document.querySelector(".dice");
let  resetbtnEl = document.querySelector(".btn.btn--new");
let  rollbtnEl = document.querySelector(".btn.btn--roll");
let holdbtnEl = document.querySelector(".btn.btn--hold");

let score1, score2, currentscore, activePlayer, playing;

let init = () => {

    let player1 = Player1;
    let player2 = Player2;


    score1= 0;
    score2= 0;
    currentscore= 0;
    activePlayer= 0;
    playing= true;
    player1scoreEl.textContent= score1;
    player2scoreEl.textContent= score2;
    current1scoreEl.textContent= 0;
    current2scoreEl.textContent= 0;
    diceEl.classList.add("hidden");
    diceEl.classList.remove("player--winner");

    player1.classList.remove("player--winner");
    player2.classList.remove("player--winner");
    player1.classList.add("player--active");
    player2.classList.remove("player--active");
};

init ();
resetbtnEl.addEventListener("click",init);

let changePlayer = () => {
     
     currentscore=0;
     document.querySelector(`#current--${activePlayer}`).textContent = 0;
     activePlayer = activePlayer === 0?1:0;
     
     player1.classList.toggle("player--active");
     player2.classList.toggle("player--active");
}

let rollDice = () => {
   if(playing) {
    let randomNumber = Math.trunc(Math.random() *6)+1;
    console.log(randomNumber);
   diceEl.src = `dice-${randomNumber}.png`;
   diceEl.classList.remove("hidden");

   if(randomNumber !=1) {
    currentscore = currentscore + randomNumber;
    document.querySelector(`#current--${activePlayer}`).textContent = currentscore;

   }
   else{
    changePlayer();
   }
   }
}
rollDice();

let hold = () => {
    if(playing) {
        if(activePlayer===0) {
            // scoe1 = score1+currentScore;
            score1 += currentscore;
            player1scoreEl.textContent= score1;
            if(score1 > 30) {
                playing=false;
                diceEl.classList.add("hidden");
                Player1.classList.add("player--winner");
            }
            else{
                changePlayer();
            }
        } 
         else {

            score2 += currentscore;
            player2scoreEl.textContent= score2;
            if(score2 > 30) {
                playing=false;
                diceEl.classList.add("hidden");
                Player2.classList.add("player--winner");
            }
            else{
                changePlayer();
            }

        }
    }
}

holdbtnEl.addEventListener("click",hold);
rollbtnEl.addEventListener("click",rollDice);







