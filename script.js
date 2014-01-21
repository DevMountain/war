$(document).ready(function() {

	//what does this do?
	function convert_value_to_string(value) {
		if (value > 10) {
			switch (value) {
				case 11:
				return 'Jack';
				break;
				case 12:
				return 'Queen';
				break;
				case 13:
				return 'King';
				break;
			}
		}
		return value.toString();
	}

	//what does this do?
	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];
		for (var j = 0; j<13; j++) {
			deck.push({number: j+1, suit: suit});
		}
	}
	
	//shuffle the deck
	deck = _.shuffle(deck);
	
	//divide out the cards into two arrays, one for each player
	var cards_player_1 = [];
	var cards_player_2 = [];
	
	cards_player_1 = deck.splice(0, Math.ceil(deck.length/2));
	cards_player_2 = deck;
	
	
	//create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
	function war(card_1, card_2) {
		if (card_1.number > card_2.number) {
			return card_1;
		}
		else if (card_2.number > card_1.number) {
			return card_2;
		}
		return false;
	}
	
	
	//create a play function
	function play() {
		var winning_card = war(cards_player_1[0], cards_player_2[0]);
		var winner;
		var loser;
		if (winning_card) {
			winner = winning_card == cards_player_1[0] ? cards_player_1 : cards_player_2;
			var loser = winner == cards_player_1 ? cards_player_2 : cards_player_1;
			var lost_card = loser.shift();
			winner.push(lost_card);
			//move card to back
			winner.push(winner.shift());
		}
		else {
			//tie, get fourth card from here and compare
			var c1 = cards_player_1[4];
			var c2 = cards_player_2[4];
			var tie_card_winner = war(c1, c2);
			if (!tie_card_winner) {
				alert("double tie!!");
				//uh oh, second tie??
			}
			else {
				winner = tie_card_winner == c1 ? cards_player_1 : cards_player_2;
				loser = winner == cards_player_1 ? cards_player_2 : cards_player_1;
				var lost_cards = loser.splice(0, 5);
				for (var i = 0; i<lost_cards.length; i++) {
					winner.push(lost_cards[i]);	
				}
				//move cards to back
				for (var i = 0; i<=5; i++) {
					winner.push(winner.shift());
				}
			}
		}
		//this function (defined below) will continue to the next turn
		advance();
	}
	
	function advance() {
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(card_1.number+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#my-card").html(card_2.number+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
			
		}
	}
	advance();
	
	$(".btn").click(function() {
		play();
	});
});