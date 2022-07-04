// Write a function that takes a Set and a value as arguments
// Check if the value is present in the Set

function myFunction(set, val) {
	return set.has(val);
}

const result = myFunction(new Set([123]), 2);
console.log(result);
