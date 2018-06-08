// element.addEventListener(type, functionToCall);

/* 
	<button>Click Me</button>
	<p>No One Clicked Yet</p>
*/
var button = document.querySelector("button");
var p = document.querySelector("p");

button.addEventListener("click", changeText);

function changeText() {
	p.textContent = "Someone Clicked the Button!";
}

var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("click", function() {
		this.style.color = "pink";
	});
}