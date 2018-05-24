/* === FLIPPING CARDS === */
const board = document.getElementById('board');
const cards = document.getElementsByClassName('card');
const cardBacks = document.getElementsByClassName('card-back');

// TO DO: Make card borders highlighted when hovered on

board.addEventListener('mouseover', function(){

    for(let cardBack of cardBacks) {
        cardBack.addEventListener('click', function(event) {
            event.target.style.zIndex = '-2';
        });
    }
})