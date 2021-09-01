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

//Segunda parte (FUNCTION 1) 

function handleUserChoice() {

    console.log(numberToGuess);
    const inputValue = parseInt(userInput.value);

    if (inputValue > numberToGuess && inputValue <= 100) {
        console.log('Demasiado Alto.')
        userAttempt.value = 'Demasiado Alto.'

    } else if (inputValue < numberToGuess && inputValue >= 1) {
        console.log('Demasiado bajo.')
        userAttempt.value = 'Demasiado bajo.'


    } else if (inputValue === numberToGuess) {
        console.log(' has ganado campeona!!!')
        userAttempt.value = 'Has ganado Campeona!!!'

    } else if (isNaN(inputValue) === true && inputValue == userInput.value) {
        console.log(' El número debe estar entre 1 y 100. ')
        userAttempt.value = 'El número debe estar entre 1 y 100.'

    } else {
        console.log(' El número debe estar entre 1 y 100.')
        userAttempt.value = 'El número debe estar entre 1 y 100.'
    }

}


// expected output: "Not a Number!"

//GLOBAL FUNCTION where to add all small functions

function handleAllFunctions(e) {
    e.preventDefault();
    handleUserChoice()

}

// event 

submitBtn.addEventListener('click', handleAllFunctions)