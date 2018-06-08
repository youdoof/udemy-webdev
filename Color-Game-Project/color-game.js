var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var goalColor = findNewGoalColor();
var colorDisplay = document.querySelector("#colorDisplay");
var headerDisplay = document.querySelector("h1");
var messageDisplay = document.querySelector("#messageDisplay");
var resetButton = document.querySelector("#reset");

colorDisplay.textContent = goalColor;

for (var i = 0; i < squares.length; i++) {
	// Add initial colors to squares.
	squares[i].style.backgroundColor = colors[i];

	// Add click listeners to squares
	squares[i].addEventListener("click", function() {
		// Get color of the clicked square
		var clickedColor = this.style.backgroundColor;
		// Compare clicked color to goal color
		if (clickedColor === goalColor) {
			messageDisplay.textContent = "CORRECT!"
			changeColors(goalColor);
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again"
		}
	});
}

resetButton.addEventListener("click", function() {
	colors = generateRandomColors(6);
	goalColor = findNewGoalColor();
	colorDisplay.textContent = goalColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	headerDisplay.style.backgroundColor = "#232323";

});

function findNewGoalColor() {
	var selection = Math.floor(Math.random() * colors.length);
	return colors[selection];
}

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	headerDisplay.style.backgroundColor = color;
}

function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
