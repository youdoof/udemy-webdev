// Array of movie objects.
// Each movie has: title, rating, hasWatched
// Iterate through and print out info

var movies = [
	{
		title: "Iron Man",
		rating: 4,
		hasWatched: true
	},
	{
		title: "Incredible Hulk",
		rating: 2.75,
		hasWatched: true
	},
	{
		title: "Iron Man 2",
		rating: 3,
		hasWatched: true
	},
	{
		title: "Thor",
		rating: 4,
		hasWatched: true
	},
	{
		title: "Captain America: The First Avenger",
		rating: 4,
		hasWatched: true
	},
	{
		title: "The Avengers",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Iron Man 3",
		rating: 4,
		hasWatched: true
	},
	{
		title: "Thor: The Dark World",
		rating: 3.5,
		hasWatched: true
	},
	{
		title: "Captain America: The Winter Soldier",
		rating: 4,
		hasWatched: true
	},
	{
		title: "Guardians of the Galaxy",
		rating: 4,
		hasWatched: true
	},
	{
		title: "Avengers: Age of Ultron",
		rating: 4,
		hasWatched: true
	},
	{
		title: "Ant-Man",
		rating: 4.5,
		hasWatched: true
	},
	{
		title: "Spiderman: Homecoming",
		rating: 4,
		hasWatched: false
	},
];

for (var i = 0; i < movies.length; i++) {
	if (movies[i].hasWatched) {
		console.log("You have watched " + movies[i].title + " - " + movies[i].rating + " stars");
	} else {
		console.log("You have not seen " + movies[i].title + " - " + movies[i].rating + " stars");
	}
}