var button = document.querySelector("button");
button.addEventListener("click", changeColor);

function changeColor() {
	if (document.body.className === "orange") {
		document.body.className = "green";
	} else {
		document.body.className = "orange";
	}
}