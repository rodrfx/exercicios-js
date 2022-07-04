// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function myFunction(a = 'abc', n) {
	return a.slice(n - 1, n);
}

const result = myFunction('abcd', 1);
console.log(result);
