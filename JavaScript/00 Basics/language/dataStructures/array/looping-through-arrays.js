var colors = ['red', 'orange', 'yellow', 'green'];

for (var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}

// forEach - camel case is important. lol this is atrocious.
colors.forEach(function(color) {
	console.log(color);
});

function printColor(color) {
	console.log(color);
}

colors.forEach(printColor);
