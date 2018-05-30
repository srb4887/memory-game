/* === COUNTER === */
let count = 0;
let matchCount = 0;
const currentCount = document.getElementById('currentCount');

/* === FLIPPING CARDS === */
const cardBacks = document.getElementsByClassName('card-back');
const cardFronts = document.getElementsByClassName('card-front');
let notMatchedCards = document.getElementsByClassName("not-matched");
const board = document.getElementById('board');

for(let cardBack of cardBacks) {
    cardBack.addEventListener('click', function(event) {
        event.target.style.zIndex = '-2';

        if (!event.target.previousElementSibling.classList.contains('selected') && !event.target.previousElementSibling.classList.contains('matched')) {
            event.target.previousElementSibling.classList.add('selected');
        }

        count += 1;
        currentCount.innerText = count;
    });
}

/* === HOVER EFFECT === */
for(let cardBack of cardBacks) {
    cardBack.addEventListener('mouseenter', function(event) {
        event.target.classList.add('hover');
    });
    cardBack.addEventListener('mouseleave', function(event) {
        event.target.classList.remove('hover');
    });
}

/* === MATCHING CARDS === */
let selectedCards = document.getElementsByClassName("selected");

board.addEventListener('click', function() {
    if (count > 0 && count % 2 === 0) {
        console.log(count);
        console.log("There might be a match!");
        let selectedCard1 = selectedCards[0];
        let selectedCard2 = selectedCards[1];
        let symbol1 = selectedCard1.firstElementChild.className;
        let symbol2 = selectedCard2.firstElementChild.className;
        console.log(symbol1);
        console.log(symbol2);
        if (symbol1 === symbol2) {
            console.log("It's a match!");
            selectedCard1.classList.add('matched');
            selectedCard2.classList.add('matched');
            selectedCard1.classList.remove('selected');
            selectedCard2.classList.remove('selected');
            matchCount += 1;
            console.log(matchCount + " matches!");
        } if (symbol1 !== symbol2) {
            console.log("Not a match!");
            selectedCard1.classList.add('not-matched');
            selectedCard2.classList.add('not-matched');
            setTimeout(function() {
                selectedCard1.classList.remove('not-matched');
                selectedCard2.classList.remove('not-matched');
                selectedCard1.nextElementSibling.style.zIndex = '0';
                selectedCard2.nextElementSibling.style.zIndex = '0';
            }, 1000);
            selectedCard1.classList.add('not-matched');
            selectedCard2.classList.add('not-matched');
            selectedCard1.classList.remove('selected');
            selectedCard2.classList.remove('selected');
        }
    }
});
