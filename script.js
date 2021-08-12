const gameContainer = document.getElementById("game");


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.setAttribute('name', color);

    newDiv.setAttribute('data-matched', false)

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}



let cardOne = ""
let cardTwo = ""
let oneColor = ''
let twoColor = ''


// TODO: Implement this function!
function handleCardClick(event) {
  // log which card was clicked
  

  //if twoColor is not blank, exit function bc still need to clear last incorrect cards
  if (twoColor !== '') {
    return
  }

  // if already matched, exit function
  if (event.target.dataset.matched == true) {
    return
  }

  //determine if first or second card clicked
  if (cardOne === "") {
    cardOne = event.target
    oneColor = event.target.getAttribute('name')
  } else {
    cardTwo = event.target
    twoColor = event.target.getAttribute('name')
  }

  // change color of clicked card
  event.target.classList.add(event.target.getAttribute('name'))




  //if a match, reset variables and change data-matched to true, then check if won
  if (oneColor === twoColor) {
    cardOne.setAttribute('data-matched', true);
    cardTwo.setAttribute('data-matched', true);
    cardOne = '';
    cardTwo = '';
    oneColor = '';
    twoColor = '';
    

    let divs = document.querySelectorAll('div div')
    for (let i=0; i < divs.length;i++) {
      if ((divs[i].getAttribute('data-matched') == 'false')) {
        return;






        
      } 
      
    }
    alert('you win')
    

    
    // if not a match, gets rid of color and resets variables after 1 second
  } else if (cardTwo !== "") {
   
    setTimeout(function () {
      cardOne.classList.toggle(oneColor);
      cardTwo.classList.toggle(twoColor);
      cardOne = '';
      cardTwo = '';
      oneColor = '';
      twoColor = '';
    }, 1000)
  }
}


// when the DOM loads
createDivsForColors(shuffledColors);
