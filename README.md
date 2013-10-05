war
===

Start of the "war" project (algorithms, Backbone)

##Step 1: Shuffle the deck
Take a look at script.js. Examine what the two for loops do in conjunction with each other. What will the resulting array (`deck`) look like?
* After the deck is created and filled, randomize it. (hint: there is a quick function in underscore that will help you accomplish this).

##Step 2: Create a Card model
We're going to create a model for Card that will populate the view that it's inserted into.
* Create a Card Model with defaults: value (0) and suit ('')
* Place the Card Model before the for loops, then rewrite the deck.push line to use your newly created Card model.

##Step 3: Create a Card view
Create a simple Card view that will show the suit and value of a given model (card).
* Use the template provided in index.html (#card-template)

##Step 4: Create two instances of Card views
* Did you know that you can assign an `el` value when you create an instance of a view? Use the code below as a guide to instantiate your Card views twice and assign them to the two card divs already provided (#opp-card and #my-card)

```javascript
var myCardView = new CardView({el:$('#some-selector')});
```

##Step 5: Create a 'deal_cards' algorithm 
When the page loads the cards should be divided equally into each player's pile. 
* Create an array for each player that represents that player's deck
* Create an algorithm called `deal_cards` that automatically divides out the cards in `deck` between the two players
  * There are many ways to do this, try to come up with the easiest, simplest solution (remember, the deck is already shuffled at this point)

##Step 6: Create the 'war' algorithm
Create an algorithm called `war` that accepts two cards as parameters, compares the value, and returns a winner. In the case that the cards are a tie, have the algorithm return `false`.

##Step 7: Create the 'play' function 
When the user clicks the 'Play!' button, your function should advance play.
* The two top cards on each deck should be sent to the war algorithm
* The winner should receive both cards, which should be placed at the end of his/her deck

##Step 8 (Black Diamond): Account for 'tied' cards
If there is a tie, the cards shouldn't be assigned until the next legitimate win.
