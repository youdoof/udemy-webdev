// Select all divs and give them a purple background
$("div").css("backgroundColor", "purple");

// Select the divs with class "highlight" and make them 200px wide
$(".highlight").css("width", "200px");

// Select the div with id "third" and give it an orange border
$("#third").css("border", "5px solid orange");

// Bonus: Select the first div only and change its font color to pink
// https://api.jquery.com/first-selector/
$("div:first").css("color", "pink");

/*
$("div:first-of-type").css("color", "pink");
       ^ From Solution Video
apparently a little bit faster than the jQuery version (:first)
*/
