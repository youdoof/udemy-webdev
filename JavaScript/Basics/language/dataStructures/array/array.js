// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
var friends = ["j'kee", "matt", "chad"];

friends[3] = "Gracie";

friends[0] = "Jacque";

// Can hold any type of data!
var random_collection = [49, true, "Dingus", ["bruh", 'deh', 4]];

// Push / Pop
// Back End of array
friends.push("Total LOSER");
// 
friends

friends.pop();

// Shift & Unshift
// Front end of array

// Adds to front
friends.Unshift("Gnoh");
friends.Shift();

// IndexOf
// Tries to find argument in given array, returns Index
var gnoh = ["apple", "orange", "pear", "lemon"];
gnoh.IndexOf("orange");
gnoh.IndexOf("pineapple"); // -1 b/c not in array.

// SLICE
var fruits = ["Banana", "Orange", "Lemon", "Mango"];
var citrus = fruits.slice(1,3); // Orange and Lemon. beginning inclusive, ending exclusive.

var nums = [1, 2, 3, 4];
var otherNums = slice();
