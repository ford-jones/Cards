// make a button that when clicked returns 5 random cards and puts them in the field

//make the button clickable .onclick
//make a randomization function
//fetch source of card images and declare as a variable
//when the random function has run its course through the array of cards and given back 5 cards, have them appear inside the table cells
//this could be createElement or changing the innerHTML of the <td>
//the tds should also have positions in an array / be numbered

/*--------------VARIABLES-----------*/

let cardIndex = 0

let suits = {
  1: `clubs`,
  2: `diamonds`,
  3: `hearts`,
  4: `spades`,
}

let cards = document.createElement(`img`)
cards.src = `images/deck/` + suits + cardIndex + `.png`

let hand = document.getElementsByClassName(`hand`)
console.log(hand)

/*-----------FUNCTIONS-----------*/
