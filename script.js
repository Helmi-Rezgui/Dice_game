const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

let currentScore, activePlayer, score;

function init() {
    activePlayer = 0;
    currentScore = 0;
    score = [0, 0];
    document.querySelector('.dice').classList.add('hidden');
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    document.getElementById('btn-roll-dice').disabled = false;
    document.querySelector('.btn--hold').disabled = false;
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');

}

init();

function switchPlayer() {
    // V1 (Manel)
    // document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    // activePlayer = activePlayer == 0 ? 1 : 0;
    // document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    
    // V2 
    
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer == 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
    currentScore = 0;
}

document.getElementById('btn-roll-dice').addEventListener('click', () => {
    let nb = Math.trunc(Math.random() * 6) + 1;
    document.querySelector('.dice').classList.remove('hidden');
    document.querySelector('.dice').src = `dice-${nb}.png`;
    if(nb != 1) {
        currentScore += nb;
        //current0.textContent = currentScore;
        //current1.textContent = currentScore;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else {
        switchPlayer();
    }
})

document.querySelector('.btn--hold').addEventListener('click', () => {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
    if(score[activePlayer] >= 20) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.getElementById('btn-roll-dice').disabled = true;
        document.querySelector('.btn--hold').disabled = true;
    }
    else {
        switchPlayer();

    }
})


document.querySelector('.btn--new').addEventListener('click', init)