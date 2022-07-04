// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
function myFunction(a) {
	let negativeNumbers = 0;

	for (const element of a) {
		if (element < 0) {
			negativeNumbers += 1;
		}
	}
	return negativeNumbers;
}

//OU

// function myFunction(a) {
//	return a.filter((el) => el < 0).length;
// }

const result = myFunction([1, -2, 2, -4]);
console.log(result);
