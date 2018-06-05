// getElementById();
var tag = document.getElementById("highlight");

// getElementsByClassName();
// Returns a Node List. Lighter array type.
var tags = document.getElementsByClassName("bolded"); 

// getElementsByTagName();
// returns a list, even if only one element
var tages = document.getElementsByTagName("li");
var body = document.getElementsByTagName("body")[0];

// querySelector();
// Newer! CSS-style selector... li a.hover
// Returns one element...
var tagOne = document.querySelector(".bolded");
var h1 = document.querySelector("h1");
var li = document.querySelector("#highlight");

// querySelectorAll();
// returns all found, works if only one match tho...
var lis = document.querySelectorAll("li");
var bolded = document.querySelectorAll(".bolded");
