

var cards = [ //sets up array of cards
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {rank: "king",
   suit: "hearts",
   cardImage: "images/king-of-hearts.png"
 },
  {rank: "king",
   suit: "diamonds",
   cardImage: "images/king-of-diamonds.png"
  }
];
var cardsInPlay =[];

var checkForMatch = function(){ //checks the selected cards for a match
  if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
  } else {
      alert("Sorry, try again.");
  }
}

var flipCard = function(){ //this function turns the card over
  for(prop in this){
    console.log(prop);
  }
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  this.setAttribute('src', cards[cardId].cardImage);

  if (cardsInPlay.length % 2 === 0){ //after two cards have been flipped, check for match
    checkForMatch();
  }
}

var createBoard = function(){ //creates game board
  for (var i = 0; i < cards.length; i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src','images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    //console.log(cardElement);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();
