// Order... HEH
var person = ["Cindy", 32, "Missoula"];

// No Order Here
var person = {
	name: "Cindy",
	age: 32,
	city: "Missoula"
};

console.log(person["name"]);
console.log(person.name);

someObject.1blah // INVALID
someObject["1blah"] // VALID

var str = "name";
someObject.str // tries the str dingus
someObject[str] // finds the name property

var dingus = {};

var posts = [
	{
		title: "Cats are mediocre.",
		author: "Colton",
		comments: ["Awesome Post!", "Terrible Post!?"]
	},
	{
		title: "Cats are kinda awesome.",
		author: "CatLover247",
		comments: ["Mega LAME.", "MEGA GOOD"]
	}
];

posts[0].title;
posts[1].comments[1];

var someObject = {
	friends: [
	{name: "Malfoy"},
	{name: "Crabbe"},
	{name: "Goyle"}
	],
	color: "baby blue",
	isEvil: true
};

someObject.friends[0].name;