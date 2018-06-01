// If you are under 18
// 	not enter venue
// If between 18 and 21
// 	enter, no drink
// Otherwise
// 	enter

var age = Number(prompt("Argh matey, what be yer age??"));

if (age < 0) {
	console.log("Come back when you exist.");
} else if (age < 18) {
	console.log("Sorry, you are not old enough to enter the venue.");
} else if (age < 21) {
	// else if (age > 18 && age < 21) REDUNDANT. ^^ refactored.
	console.log("You can enter, but cannot drink.");
} else {
	console.log("Come on in. You can drink.");
}

if (age === 21) {
	console.log("Happy 21st! Go get durnk.");
}

if (age % 2 !== 0) {
	console.log("Ur age be odd, matey!");
}

if (age % Math.sqrt(age) === 0) {
	console.log("Your age is a perfect square, breh!");
}