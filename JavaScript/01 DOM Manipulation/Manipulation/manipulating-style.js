// STYLES
var tag = document.querySelector("p");

tag.style.color = "purple";

// toggle on or off the css class
/* Define in CSS 

.class-name {
	color: purple;
	fontSize: 76px;
}

*/

// TEXT CONTENT

var p = document.querySelector("p");
// p.classList.add("big");
// p.classList.remove("big");
// p.classList.toggle("big");

// anything between html tags, but not the tags within that tag you use...
console.log(p.textContent);
// p.textContent = "Bloogie Blorgh";
// console.log(p.textContent);

var ul = document.querySelector("ul");
console.log(ul.textContent);

/*
	Extract and maintain the html elements within
<p>
	This is an <strong>awesome</strong> paragraph.
</p>

var tag document.querySelector("p");
tag.innerHTML
*/
console.log(p.innerHTML);
console.log(ul.innerHTML);

document.querySelector("h1").textContent = "End of this Lesson!";

/*
	document.body.textContent = "<h1>Goodbye!</h1>";
	^ puts literal text "<h1>Goodbye!</h1>" in the body
	document.body.innerHTML = "<h1>Goodbye!</h1>";
	^ puts an h1 tag with the contents "Goodbye!" in the body of the HTML
*/



// ATTRIBUTES

// variable.setAttribute

// Locally sourced pictures.
var DOG_PICTURE = "IMG_5091.JPG";
var TEC_PICTURE = "TSU Technique Pictures 084.JPG";

// Changing the source of the image tag in the HTML
var img1 = document.getElementsByTagName("img")[0];
img1.setAttribute("src", TEC_PICTURE);

// Changing the link of an a tag 
var a = document.querySelector("a");
a.setAttribute("href", "https://www.bing.com");
// Set the text for the a tag to say something else!
a.textContent("Link to BING");
