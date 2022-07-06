// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
function myFunction(a = 1) {
	return parseInt(a) === parseFloat(a);
}

// OU
// function myFunction(a) {
//	return a - Math.floor(a) === 0
//  }

const result = myFunction(10.1);
console.log(result);
