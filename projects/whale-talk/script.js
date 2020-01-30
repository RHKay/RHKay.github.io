let message = document.getElementById("message");
let nowTranslate = document.getElementById("now-translate");

const whaleTalk = function () {
	let translatedMsg = message.value.toLowerCase();
	let answer = document.getElementById("answer");
	// and array of vowels that will be looked for in the input array
	let vowels = ["a", "e", "i", "o", "u"];
	// the array where the vowels from input will be stored
	let resultArray = [];


	if (translatedMsg === "") {
		answer.innerHTML = "<p>This whale needs a word to translate.</p>";
	} else {
		for (let i = 0; i < translatedMsg.length; i++) {
			for (let j = 0; j < vowels.length; j++) {
				if (translatedMsg[i] === vowels[j]) {
					resultArray.push(translatedMsg[i]);
				}
			}

			if (translatedMsg[i] === "e" || translatedMsg[i] === "u") {
				resultArray.push(translatedMsg[i]);
			}
		}

		if (resultArray.length < 1) {
			answer.innerHTML = "<p>What? No vowels? You can do better than that.</p>";
			message.value = "";
		} else {
			answer.innerHTML = `<p>${resultArray.join("").toUpperCase()}</p>`;
			message.value = "";
		}
	}

}

let translate = function() {
	whaleTalk();
}

nowTranslate.addEventListener("click", translate);