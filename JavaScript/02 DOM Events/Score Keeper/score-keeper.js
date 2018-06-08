var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");

var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var goalDisplay = document.getElementById("goalDisplay");

var numInput = document.getElementById("number");

var p1Score = 0;
var p2Score = 0;

var goalScore = 5;

var gameOver = false;

p1Button.addEventListener("click", addPlayerOneScore);
p2Button.addEventListener("click", addPlayerTwoScore);
resetButton.addEventListener("click", resetGame);

numInput.addEventListener("change", updateGoalScore);

function addPlayerOneScore() {
	if (!gameOver) {
		p1Score++;
		if (p1Score === goalScore) {
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
}

function addPlayerTwoScore() {
	if (!gameOver) {
		p2Score++;
		if (p2Score === goalScore) {
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
}

function resetGame() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

function updateGoalScore() {
	goalScore = Number(numInput.value);
	goalDisplay.textContent = goalScore;
	resetGame();
}
