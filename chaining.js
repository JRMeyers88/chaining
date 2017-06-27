
    // Sort the numbers in descending order (10, 9, 8, 7, etc).
    // Remove any integers greater than 19.
    // Multiply each remaining number by 1.5 and then subtract 1.
    // Then output (either in the DOM or the console) the sum of all the resulting numbers.

//instead of var = [array], you can declare the array before the function
//use "b - a" to sort in descending order (a - b will be low to high)
console.log("reverse sorty", [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8].sort(function(a, b) {
	return b - a;
	//.filter to remove array items
}).filter(function(numbers){
	return numbers < 19;
	//.map to apply math to all items in array
}).map(function(multi) {
	return multi * 1.5 - 1;
	//.reduce to "reduce" array into one item (adds array items. used c + d similar to how the sort method works)
}).reduce(function(c, d) {
	return c + d;
}));









