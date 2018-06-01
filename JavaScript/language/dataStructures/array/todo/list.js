var todos = ["Buy New Turtle"];
window.setTimeout(function() {
	var input = prompt("What would you like to do?");
	while (input !== "quit") {
		if (input === "list") {
			console.log(todos);
		} else if (input === "new") {
			// ask for new todo
			var newTodo = prompt("Enter new todo");
			// add to todo array
			todos.push(newTodo);
		}
		// ask for input again
		input = prompt("What would you like to do?");
	}
	console.log("QUIT");
}, 500);