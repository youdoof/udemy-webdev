var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt("How old are you?");

// From Solution
var fullName = firstName + " " + lastName;

//console.log("Your full name is " + firstName + " " + lastName);
console.log("Your full name is " + fullName);
if (age > 1 || age < 1) {
	console.log("You are " + age + " years old")
} else {
	console.log("You are " + age + " year old");
}