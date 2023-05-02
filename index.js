let btnStart = document.querySelector('.js-btn-start');
let btnReset = document.querySelector('.js-btn-reset');
let counterText = document.querySelector('.counter');

let counter = 0;

btnStart.addEventListener('click', function() {
    counter++;

    counterText.innerText = counter;
})

btnReset.addEventListener('click', function() {
     counter = 0;

     counterText.innerText = counter;
 })
