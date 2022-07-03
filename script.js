// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
function myFunction(a, n) {
	return a[n - 1];
}

const result = myFunction([1, 2, 3, 4, 5], 3);
console.log(result);
