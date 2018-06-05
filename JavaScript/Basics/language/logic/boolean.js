//=== Equal to value and type.	x === "5"	false
//!== Not equal value or type.	x !== "5"	true

var x = 99;
x == "99" //true
x === "99" //false

// Double == Quirks
 true == "1"		//true
 0 == false			//true
 null == undefined 	//true
 NaN == NaN			//false

 // Logical Operators Cont'd
 var x = 5
 var y = 9
 &&		AND 	x < 10 && x !== 5	false
 ||		OR 		y > 9 || x === 5	true
 ! 		NOT 	!(x === y) 			true

 // Truthy / Falsy
 !"Hello World"
 !""
 !null
 !0
 !-1
 !NaN

 // Falsy:
 // False, 0, "", null, undefined, NaN
 // Truthy:
 // Everything else.
