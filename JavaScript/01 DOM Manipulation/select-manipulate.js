// SELECT
var h1 = document.querySelector("h1"); // Selects the h1, returns object representing the h1 in the DOM

// MANIPULATE
h1.style.color = "pink"; // Sets the color of the h1 to pink.

var body = document.querySelector("body");
var isBlue = false;

setInterval(function() {
	if (isBlue) {
		body.style.background = "white";
	} else {
		body.style.background = "#3498db";
	}
	isBlue = !isBlue;
}, 1000);

// document.something
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector()
document.querySelectorAll()


