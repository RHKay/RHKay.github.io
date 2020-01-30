// text that will translate into whale language
let input = "turpentine and turtles";
// and array of vowels that will be looked for in the input array
let vowels = ["a", "e", "i", "o", "u"];
// the array where the vowels from input will be stored
let resultArray = [];

// for loop that loops through the input array
// i will be the index of the input array letters
for (let i = 0; i < input.length; i++) {
	//nested for loop to iterate through the vowels array
	// where j is the index of each vowel in the array
	for (let j = 0; j < vowels.length; j++) {
		// push any vowels found in the input array into the resultArray
		if (input[i] === vowels[j]) {
			resultArray.push(input[i]);
		}
	}

	// double the "e" and the "u" the program finds
	if (input[i] === "e" || input[i] === "u") {
		resultArray.push(input[i]);
	}
}

//console.log(resultArray);
console.log(resultArray.join("").toUpperCase());