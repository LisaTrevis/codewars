//Given a list of non-negative numbers and strings, return only the non-negative numbers:

// var myArray = [1,2,'a','b']
// var myArray2 = [1,'a','b',0,15]

// function filter_list(array) {
// 	// create empty array
// 	var newArray = [];
// 	// loop through given array, and in each iteration,
// 	// check if array item at i is a number or a string
//   	for ( i = 0; i < array.length; i++ ) {
//     	if(typeof array[i] === "number") {
//       	// if it's a number, push to empty array
//       	newArray.push(array[i]);
// 		}
// 	};
// 	return newArray;
// }

// // Most upvoted answer (ES6)
// function filter_list(l) {
//   return l.filter(function(v) {return typeof v == 'number'})
// }


// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array and be ready for anything else which is not clearly specified ;)

// given an initital signature array of 3 numbers, return an array that starts with/includes the signature items for a total of n items
// i.e. if signature = [ 2, 3, 4 ] and n = 6, return [ 2, 3, 4, 9, 16, 29 ] 

function tribonacci(signature, n){
	// create an empty newArray
	let newArray = [];
	
	// edge case for n = 0
	if(n === 0) {
		return [];
	}

	// edge case for n less than 3
	if(n < 3) {
		
	}
	
	// push signature numbers to newArray
	for ( i = 0; i < signature.length; i++ ) {
		newArray.push(signature[i]);
	} // console.log(newArray) returns [ 2, 3, 4 ]

	// loop through n times
	for ( i = 0; i < n-3; i++ ) {
		var sum = newArray[i] + newArray[i+1] + newArray[i+2]
		newArray.push(sum)
	}
	return newArray;
}

// tribonacci([ 2, 3, 4 ], 6)










