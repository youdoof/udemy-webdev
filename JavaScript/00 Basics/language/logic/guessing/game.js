// Create secretNumber
var secretNumber = 4;

// Ask for guess
var guess = Number(prompt("Guess a number"));

// Check if correct
if (guess === secretNumber) {
	alert("CORRECT");
} else if (guess > secretNumber) {
	alert("Too dang high! Guess agains!");
} else {
	alert("Too darn low!! Guess agains!");
}