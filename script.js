// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
function myFunction(a) {
	return a.slice(3);
}

const result = myFunction([5, 4, 3, 2, 1, 0]);
console.log(result);
