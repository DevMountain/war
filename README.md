war
===

Start of the "war" project (algorithms)

##Step 1: Shuffle the deck
Take a look at script.js. Examine what the two for loops do in conjunction with each other. What will the resulting array (`deck`) look like?

##Step 2: Deal the cards 
When the page loads the cards should be divided equally into each player's pile. 
  * Write code that will automatically divide out the cards in `deck` between the two players
  * There are many ways to do this, try to come up with the easiest, simplest solution (remember, the deck is already shuffled at this point)

##Step 3: Create the 'war' algorithm
Create an algorithm called `war` that determines the winner from a given pair of cards. It should be a function that accepts two cards as parameters, compares the value, and returns a winner. In the case that the cards are a tie, have the algorithm return `false`.

##Step 4: Create the 'play' function 
When the user clicks the 'Play!' button, your function should play the current pair of cards.
* The two top cards on each deck should be sent to the war algorithm
* The winner should receive both cards, which should be placed at the end of his/her deck
* Call the "advance" function to continue play

##Step 5 (Black Diamond): Account for 'tied' cards
If there is a tie, the play function should then check the 4th cards from each player's deck and determine the winner, who gets all of the previous cards.
