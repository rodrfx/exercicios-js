// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
function myFunction(a) {
	const strLength = a.length / 2;
	return a.slice(0, strLength);
}

const result = myFunction('abcdefgh');
console.log(result);
