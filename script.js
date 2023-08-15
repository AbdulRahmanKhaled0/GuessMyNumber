'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

// should be like this when the right answer come
// document.querySelector('.number').textContent = secretNumber;
// INITIAL VALUES
let counterScore = 20;
let highScore = 0;

// CHECK BUTTON
document.querySelector('.check').addEventListener('click', function () {
  // 1-compare  2-score decreasing 3-toolow or too high
  let guessedNumber = Number(document.querySelector('.guess').value);

  if (counterScore > 1) {
    if (!guessedNumber) {
      document.querySelector('.message').textContent = 'Write a random number';
    } else if (guessedNumber !== secretNumber) {
      counterScore--;
      document.querySelector('.score').textContent = counterScore;
      if (guessedNumber > secretNumber) {
        document.querySelector('.message').textContent = 'too high📈';
      } else {
        document.querySelector('.message').textContent = 'too low📉';
      }
    } else {
      document.querySelector('.message').textContent = 'correct number👌';
      document.body.style.backgroundColor = '#60b347';
      document.querySelector('.score').textContent = counterScore;
      if (counterScore > highScore) {
        highScore = counterScore;
        document.querySelector('.highscore').textContent = highScore;
      }
      document.querySelector('.highscore').textContent = highScore;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
    }
  } else {
    document.querySelector('.number').textContent = 'Game Over';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = 'Game Over';
    document.querySelector('.score').textContent = 0;
    document.body.style.backgroundColor = '#121456';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  if (counterScore > highScore) {
    highScore = counterScore;
    document.querySelector('.highscore').textContent = highScore;
  }

  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing!';
  counterScore = 20;
  document.querySelector('.score').textContent = 20;
  document.body.style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.guess').value = '';
});
