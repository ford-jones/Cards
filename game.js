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
  // console.log(`clicked!`)
  let randomSuit = suitIndex[Math.floor(Math.random() * suitIndex.length)]
  // console.log(randomSuit)

  let randomCard = cardIndex[Math.floor(Math.random() * cardIndex.length)]
  // console.log(randomCard)

  let shuffle = randomSuit.concat(randomCard)
  // console.log(shuffle)

  // let hand = document.getElementsByTagName(`td`)

  let deck = document.createElement(`img`)
  deck.src = `./images/deck/`

  let combo = deck + deck.src + shuffle + `.png`
  console.log(combo)

  let cells = document.getElementById(`hand`)
  // cells = dealNow

  if (cells.innerHTML !== combo) {
    cells = cells.appendChild(combo)
  }
  // console.log(deck + (deck.src = `images/deck/` + shuffle + `.png`))
}

let button = document.getElementById('dealButton')
button.onclick = dealNow
