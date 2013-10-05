$(document).ready(function() {

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


	//Step 2: Card Model
	var CardModel = Backbone.Model.extend({
		defaults: {
			value: 0,
			suit: '',
			str_value: ''
		}
	});

	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];
		for (var j = 0; j<13; j++) {
			deck.push(new CardModel({
				value: j+1, 
				suit: suit,
				str_value: convert_value_to_string(j+1)
			}));
		}
	}

	//Step 1: shuffle the deck
	deck = _.shuffle(deck);

	//Step 3: Card View
	var CardView = Backbone.View.extend({
		template: _.template($('#card-template').html()),
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
		}
	});

	//Step 4
	var opp_view = new CardView({el: $("#opp-card")});
	var my_view = new CardView({el: $("#my-card")});

	var my_deck = [];
	var opp_deck = [];

	//Step 5 divide up cards
	function deal_cards() {
		my_deck = deck.splice(0, deck.length/2);
		opp_deck = deck;
	};
	deal_cards();

	function advance() {
		opp_view.model = opp_deck[0];
		my_view.model = my_deck[0];
		opp_view.render();
		my_view.render();
		console.log("my cards", my_deck.length, "opp's cards", opp_deck.length);
	}
	advance();

	//Step 6
	function war(card1, card2) {
		return card1.get('value') > card2.get('value') ? card1 : card2;
	}

	//Step 7
	$(".btn").click(function() {
		var my_card = my_deck.shift();
		var opp_card = opp_deck.shift();
		var winner = war(my_card, opp_card);
		if (winner == my_card) {
			my_deck.push(my_card, opp_card);
			console.log("you win!");
		}
		else if(winner == opp_card) {
			opp_deck.push(my_card, opp_card);
			console.log("you lost!");
		}
		advance();
	})
});