var dogSpace = {
	speak: function() {
		return "WOOF!";
	}
}

var mySpace = {
	data: ["hehehe", "hohoho", "hihihi", "huhuhu", "hahaha"],
	print: function() {
		for (var i = 0; i < this.data.length; i++) {
			console.log(this.data[i]);
		}
	}
}

mySpace.print();

// underscorejs.org