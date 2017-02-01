/*jslint browser: true, devel: true */
//variable to hold the starting location of the ship. 
//instead of hardcoding: var min represents min start location of ship and var max represents max start location of ship.
//using random number generator to get the location of the ship.generating random integer no between min and max and both inclusive-> Math.floor(Math.random() * (max - min + 1)) + min;
var max = 4;
var min = 0;
var location1 = Math.floor(Math.random() * (max - min + 1)) + min;

//variables to hold the users guess, number of hits and guesses.
var guess;
var hits = 0;
var guesses = 0;

//variables to check whether user entered loc1,loc2,loc3 once or not. 
var loc1tick = 0;
var loc2tick = 0;
var loc3tick = 0;

//variable for whether all three points were hit
var isSunk = false;

// while ship is not sunk
while (!isSunk) {
  //get the user guess
  guess = prompt("Ready, aim ,fire! (enter a number from 0-6:)");
  //checking user guess is valid or not 
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    //if user guess is valid increase the no of guesses by one.
    guesses = guesses + 1;
    //then check if user’s guess matches ship location if yes then increase the no of hits by one
    //and mark the location visited by setting locxtick to 1 to avoid the same loc guesses by the user.
    //and tell the user about hit or miss.
    if (guess == location1 && !loc1tick) {
      hits++;
      loc1tick = 1;
      alert("HIT!");
    } else if (guess == (location1 + 1) && !loc2tick) {
      hits++;
      alert("HIT!");
      loc2tick = 1;
    } else if (guess == (location1 + 2) && !loc3tick) {
      hits++;
      alert("HIT!");
      loc3tick = 1;
    } else {alert("MISS!");
           }
    // when all three cells have been hit the ship is sunk.
    if (hits === 3) {
      isSunk = true;
      alert("You sunk my battleship");
    }
   
  }
}

//We tell the user how many guesses it took to sink the ship.
var stats = "You took "  +  guesses  +  " guesses to sink the battleship, "  + "which means your shooting accuracy was " +  (3 / guesses);
alert(stats);
  