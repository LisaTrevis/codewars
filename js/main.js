//Given a list of non-negative numbers and strings, return only the non-negative numbers:

var myArray = [1,2,'a','b']
var myArray2 = [1,'a','b',0,15]

function filter_list(array) {
	// create empty array
	var newArray = [];
	// loop through given array, and in each iteration,
	// check if array item at i is a number or a string
  	for ( i = 0; i < array.length; i++ ) {
    	if(typeof array[i] === "number") {
      	// if it's a number, push to empty array
      	newArray.push(array[i]);
		}
	};
	return newArray;
}

function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}