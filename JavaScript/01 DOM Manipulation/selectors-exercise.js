// Four ways to select the first p tag

var firstp = document.getElementById("first");

var secondp = document.querySelector("#first");

var thirdp = document.querySelector("p");

var fourthp = document.querySelector(".special");

var fifthp = document.getElementsByTagName("p")[0];

var sixthp = document.getElementsByClassName("special")[0];

var seventhp = document.querySelectorAll("p")[0];

var eighthp = document.querySelectorAll(".special")[0];

var ninthp = document.querySelector("h1 + p");