// make a button that when clicked returns 5 random cards and puts them in the field

//make the button clickable .onclick
//make a randomization function
//fetch source of card images and declare as a variable
//when the random function has run its course through the array of cards and given back 5 cards, have them appear inside the table cells
//this could be createElement or changing the innerHTML of the <td>
//the tds should also have positions in an array / be numbered

/*--------------VARIABLES-----------*/

let cardIndex = [
  `1`,
  `2`,
  `3`,
  `4`,
  `5`,
  `6`,
  `7`,
  `8`,
  `9`,
  `10`,
  `11`,
  `12`,
  `13`,
]

let suitIndex = [`spades`, `diamonds`, `clubs`, `hearts`]

// let deck = document.createElement(`img`)
// deck.src = `images/deck/` + randomSuit + cardIndex + `.png`

let hand = document.getElementsByClassName(`hand`)
console.log(hand)

/*-----------FUNCTIONS-----------*/
function deal() {
  let randomSuit = suitIndex[Math.floor(Math.random() * suitIndex.length)]
  // console.log(randomSuit)

  let randomCard = cardIndex[Math.floor(Math.random() * cardIndex.length)]
  // console.log(randomCard)

  let shuffle = randomSuit.concat(randomCard)
  console.log(shuffle)
  // return shuffle

  let deck = document.createElement(`img`)
  deck.src = `images/deck/` + shuffle + `.png`
  console.log(deck)
}
deal()

// function dealButton() {
//   let button = document.getElementsByTagName(`button`)
//   button.onclick(console.log(`clicked!`))
// }
// dealButton()
