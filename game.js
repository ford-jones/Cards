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

/*-----------FUNCTIONS-----------*/
function dealNow() {
  let randomSuit = suitIndex[Math.floor(Math.random() * suitIndex.length)]
  // console.log(randomSuit)

  let randomCard = cardIndex[Math.floor(Math.random() * cardIndex.length)]
  // console.log(randomCard)

  let shuffle = randomSuit.concat(randomCard)

  let deck = document.createElement(`img`)
  deck.src = `./images/deck/` + shuffle + `.png`
  console.log(deck)

  let cells = document.getElementsByTagName(`td`)
  for (let i = 0; i < cells.length; i++) {
    if (cells !== deck) {
      cells[i] = cells[i].appendChild(deck)
    }
  }
}

/*---------CALL FUNCTIONS--------*/
let button = document.getElementById('dealButton')
button.onclick = dealNow

/*------------APPEND CHILD VARIANT 1-----------*/
// let cells = document.getElementById(`hand`)

//   if (cells.innerHTML == ``) {
//     cells = cells.appendChild(deck)
//   }
// (this works but only fetches the first id/cell. This was the original solution)
// (remember to switch all of the td's back to an "id" aswell as the css.)

/*-------APPEND CHILD VARIANT 2-------------*/
// let cells = document.getElementsByTagName(`td`)
// for (let i = 0; i < cells.length; i++) {
//   if (cells !== deck) {
//     cells[i] = cells[i].appendChild(deck)
//   }
// }
//  (This functions similarly to the first variant but if you remove the CSS styling of classname "hand" you can get multiple cards in the field)
//  (should be noted that getElementsByTagName hasn't worked in this context without a loop)
