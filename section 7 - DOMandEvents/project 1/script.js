'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector - grabs an item from the HTML based on the ' ' so for that example he grabbed something with a class name
// The textContent grabs just the text from the element. So in the console it shows just the text instead of the whole class tag

// Selecting and Manipluating

// hanging text
// document.querySelector('.message').textContent = 'Correct Number! 😻';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// Handling click events
// this is how to add and event listen
// addEventListener takes two arguments, the event its listening for and then the function

const secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// game logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    // when no iput
    document.querySelector('.message').textContent = 'No number';
  } else if (guess === secretNumber) {
    // when player wins
    document.querySelector('.message').textContent = 'Correct Number! 😻';
    document.querySelector('.number').textContent = secretNumber;

    // color change when we win
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    //when guess is too high
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Too high you lippy fuck.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game.';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    // when guess is too low
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Too low you lippy fuck.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game.';
      document.querySelector('.score').textContent = 0;
    }

    document.querySelector('.message').textContent = 'Too low you lippy fuck';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
*/
// how i did it. This was way easier.
document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});

// the way he did it.
// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.floor(Math.random() * 20) + 1;

//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
// });
