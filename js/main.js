/* === FLIPPING CARDS === */
const board = document.getElementById('board');
const cards = document.getElementsByClassName('card');
const cardBacks = document.getElementsByClassName('card-back');
const cardFronts = document.getElementsByClassName('card-front');

    for(let cardBack of cardBacks) {
        cardBack.addEventListener('mouseenter', function(event) {
            event.target.classList.add('hover');
        });
        cardBack.addEventListener('mouseleave', function(event) {
            event.target.classList.remove('hover');
        });
        cardBack.addEventListener('click', function(event) {
            event.target.style.zIndex = '-2';
            event.target.previousElementSibling.classList.add('selected');
        });
    }

