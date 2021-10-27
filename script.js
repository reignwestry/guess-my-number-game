'use strict';
/*
   NOTES
   -------

   What is the DOM?
       Document Object Model: Structured representation of HTML documents that allow javaScript to access HTML
        elements and styles to manipulate them.

        * Short connection point between HTML documents and JavaScript files.
        * Document is the special object entry point to the DOM.

        * Change text, HTML attributes, and even CSS styles
        * API: Application Programming Interface
        * Web APIs: DOM Methods and Properties can interact with JS





       GUESS MY NUMBER! GAME
       ----------------------

       todo CREATE THE FUNCTIONS OF THE GAME
 */

//note Lesson 72. Selecting and Manipulating Elements
// console.log(document.querySelector('.message').textContent); // logs the value of .message
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);
//
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
//
//
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);




/*
note 73 Handling Click Events =====================================

note    TWO WAYS TO SELECT ELEMENTS:
        ----------------------------
            * .querySelector() ===> select an element from the document
            * .getElementById() ===> select an id from the element
            *





note       * typeof ====> type of value
           * .addEventListener ==> adds a event listener to the element
           * Number(); ===> converts to a number

note    ADD A EVENT LISTENER
    ---------------------
        1) SELECT the element where the event should happen
        2) add an event listener
        3) ADD a process

 */
// const x = function(){
//     console.log(23);
// };
//
// // onClick calls the function
// document.querySelector('.check').addEventListener(
//     'click', function () {
//         const guess = Number( document.querySelector('.guess').value);
//         console.log(`GUESS: (${typeof guess}) ${guess} `);
//
//         // IF guess does not match (falsey method)
//         if(!guess){
//             // returns no number
//             document.querySelector('.message').textContent = 'No Number!';
//         }
// });


//note 74 Implementing Game Logic

/**
 note
    Math.random()*20; ===> grabs a random number from 0 to 20 including decimals
    Math.trunc(Math.random()*20);  ===> grabs a random whole number between 0 and 20
    const variables are immutable
 */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

//POSTS number to the .number element
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener(
    'click', function () {
        const guess = Number( document.querySelector('.guess').value);
        // console.log(`GUESS: (${typeof guess}) ${guess} `);
        console.log(`GUESS: ${guess} `);

        //When there is no input
        if(!guess){
            document.querySelector('.message').textContent = '⛔⛔⛔⛔ No Number!';

        //When player wins
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = '☺☺Correct Number!';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            //POSTS number to the .number element
            document.querySelector('.number').textContent = secretNumber;

            score++;

        //When guess is too high
        } else if (guess > secretNumber){
            if(score > 1){
                document.querySelector('.message').textContent = '😥😥Too High!';
                score--;

            } else {
                document.querySelector('.message').textContent = '😥😥You lost the game!';

            }
            document.querySelector('.score').textContent = score;

        //When guess is too low
        } else if (guess < secretNumber){
            document.querySelector('.message').textContent = '😥😥Too Low!';
            score--;
            document.querySelector('.score').textContent = score;

        }
});



/*
objective //////////////////////////////////////////////////////////////////////////////
    Code Challenge #1

    Objective:
        Implement a game rest functionality, so that the player can make a new guess! Here is how:
        1. Select the element with the 'again' class and attach a click event handler
        2. In the handler function, restore initial values of the score and number variables
        3. Restore the initial conditions of the message, number, score and guess input field
        4. Also restore the original background color (#222) and number with (15rem)

        GOOD LUCK 😁
 */

//note RESET ===> CLICK EVENT HANDLER
document.querySelector('.again').addEventListener(
    'click', function() {

     // re-initialize score value to 20
     score = 20;

     // re-initialize secretNumber to a new number
     secretNumber = Math.trunc(Math.random() * 20) + 1;

     // DISPLAY new score
     document.querySelector('.score').textContent = score;
     // DISPLAY original start message
     document.querySelector('.message').textContent = 'Start guessing....';
     // REMOVE & DISPLAY original value
     document.querySelector('.number').textContent = '?';
     // ERASE ALL INPUT VALUES
     document.querySelector('.guess').value = '';
     // REVERT background color
     document.querySelector('body').style.backgroundColor = '#222';
     // REVERT FONT SIZE
     document.querySelector('.number').style.width = '15rem';

});