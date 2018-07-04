// text()
// "HTML" safe... doesn't let crazy stuff get through.
$("h1").text(); // "jQuery Methods Demo"

$("li").text(); // "SkittlesSour Patch KiddosBreh Bruh BRAH!!"

$("h1").text("Gresh is the best"); // Sets h1 text to Gresh is the best
$("li").text("GRESH"); // ALL li's get text set to GRESH

// html()
$("ul").html("<li>I hak'd ur UL brehh</li>");
$('li').html('<a href="https://www.google.com">CLICK ME TO GO TO GOOGLE</a>');

// attr()
$("img").css("width", "250px");
$('img').attr('src');

$('input').attr("type");
$('input').attr("type", "color");

$('img:first-of-type').attr("src", "new source for cool thing");

// val()
$('input').val(); // ""
$('input').val('WOAH');
$('input').val(""); // resets a text input

$('select').val(); // Gets the selected input from the dropdown menu

// ------------------
// Class Manipulation
// ------------------

// addClass()
$('h1').addClass("correct");
// removeClass()
$('h1').removeClass("correct");
// toggleClass()
$('li').toggleClass("wrong");
$('li').first().toggleClass("done");