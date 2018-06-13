// Select h1 on the page
$("h1");

// Select a tag within li, within ul
$("ul li a");

// Styling.
// .css(property, value)
$("#special").css("border", "2px solid red");

$("h1").css("color", "yellow");
document.querySelector("h1").style.color = "yellow";

// Pass in an object with styles
var styles = {
	backgroundColor: "pink";
	fontWeight: "bold";
}

$("#special").css(styles);


// ---------------------------------------------------
$('li').css({
	fontSize: "10px",
	border: "3px dashed purple",
	backgroundColor: "rgba(89, 45, 20, 0.5)"
})
