var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if(this.getAttribute('data-card')=== 'king') {
		this.innerHTML = '<img src="kingspades.png" alt="King of Spades" />';
	} else {
		this.innerHtml = '<img src="queenhearts.png" alt="Queen of Hearts" />';
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPLay);
		cardsInPlay = [];
	}
}

var isMatch = function(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match!")
	} else {
		alert("Sorry, try again!")
	}
}


var gameCard = document.createElement('div');
		gameCard.className = 'card';
		gameCard.setAttribute('data-card', cards[i]);
		gameCard.addEvenetLIstener('click',isTwoCards);
		board.appendChild(gameCard);