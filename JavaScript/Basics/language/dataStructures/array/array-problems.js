// printReverse([1,2,3,4])
function printReverse(arr) {
	for (var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

// isUniform([1,1,1]) if all items in array are same, return true, else return false
function isUniform(arr) {
	var base = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] !== base) {
			return false;
		}
	}
	return true;
}

// sumArray([1,2,3])
function sumArray(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

// max([1,2,3]) return max # in array
function max(arr) {
	var max = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}