var todos = ["Buy New Turtle"];
window.setTimeout(function() {

	var input = prompt("What would you like to do?");
	while (input !== "quit") {
		if (input === "list") {
			listTodos();
		} else if (input === "new") {
			addTodo();
		} else if (input === "delete") {
			deleteTodo();
		}
		// ask for input again
		input = prompt("What would you like to do?");
	}
	console.log("QUIT");
}, 500);

function listTodos() {
	console.log("*****");
	todos.forEach(function(todo, i) {
		// the "i" refers to the index of the thing being used.
		console.log(i + ":" + todo);
	});
	console.log("*****");
}

function addTodo() {
	// ask for new todo
	var newTodo = prompt("Enter new todo");
	// add to todo array
	todos.push(newTodo);
	console.log("Added Todo");
}

function deleteTodo() {
	// Ask for index of todo to be deleted
	var index = prompt("Enter index of todo to delete.");
	// Delete that todo
	// Splice()
	todos.splice(index, 1);
	console.log("Deleted Todo");
}
