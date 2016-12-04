console.log("JS file is connected to HTML! Woo!");
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if(cardTwo === cardFour) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again!");
}
if(cardOne === cardTwo) {
		alert("You found a match!");
}
else {
	alert("Sorry, try again!");
}
if(cardThree === cardFour){
	alert("You found a match!");
}
else {
	alert("Sorry, try again!");
}*/
var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

var board = document.getElementById('game-board');

var createCards = function() {
	for(var i = 0; i<cards.length; i++) {
		var gameCard = document.createElement('div');
		gameCard.className = 'card';
		gameCard.setAttribute('data-card', cards[i]);
		gameCard.addEventListener('click', isTwoCards);
		board.appendChild(gameCard);
	}		
}

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if(this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src="kingspades.png" alt="King of Spades" />';
	} else {
		this.innerHTML = '<img src="queenhearts.png" alt="Queen of Hearts" />';
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

var isMatch = function(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again!");
	}
	setTimeout(window.location.reload.bind(window.location), 250);
}


createCards();






