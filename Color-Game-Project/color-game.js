var numSquares = 6;
var colors = [];
var goalColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var headerDisplay = document.querySelector("h1");
var messageDisplay = document.querySelector("#messageDisplay");
var resetButton = document.querySelector("#reset");

var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	// Mode Buttons
	initModeButtons();
	resetButton.addEventListener("click", reset);
	initSquares();
	reset();
}

function initModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function initSquares() {
	for (var i = 0; i < squares.length; i++) {
		// Add click listeners to squares
		squares[i].addEventListener("click", function() {
			// Get color of the clicked square
			var clickedColor = this.style.backgroundColor;
			// Compare clicked color to goal color
			if (clickedColor === goalColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(goalColor);
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset() {
	colors = generateRandomColors(numSquares);

	goalColor = findNewGoalColor();

	colorDisplay.textContent = goalColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";

	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	headerDisplay.style.backgroundColor = "steelblue";
}

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
