function isEven(dingus) {
	return (dingus % 2 === 0);
}

function factorial(dingus) {
	if (dingus > 1) {
		return dingus * factorial(dingus - 1);
	} else {
		return 1;
	}
}

function kebabToSnake(dingus) {
	return dingus.replace(/-/g, "_");
}

// HIGH ORDER FUNCTION! 
setInterval(function() {
	console.log("I am an anonymous function!");
}, 2000);
