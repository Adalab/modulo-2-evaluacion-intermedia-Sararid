'use strict';
// CONST 

const userInput = document.querySelector('.js_userInput');
const submitBtn = document.querySelector('.js_submitBtn');
const userAttempt = document.querySelector('.js_userAttempt');
const numAttempt = document.querySelector('.js_numAttempt');


//PRIMERA PARTE  -> const numberToGuess = [Math.ceil(Math.random() * 100)]

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}



const numberToGuess = getRandomNumber(100);
console.log(' Mi número aleatorio es: ' + numberToGuess);

