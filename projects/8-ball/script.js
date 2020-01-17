// array of answers
let answers = ["It is certain.",
				"It is decidedly so.",
				"Without a doubt",
				"Yes - definitely.",
				"You may rely on it.",
				"As I see it, yes.",
				"Most likely.",
				"Outlook looks good.",
				"Yes.",
				"Signs point to yes.",
				"Reply hazy, try again.",
				"Ask again later.",
				"Better not tell you now.",
				"Cannot predict now.",
				"Concentrate and ask again.",
				"Don't count on it.",
				"My reply is no.",
				"My sources say no.",
				"Outlook not so good.",
				"Very doubtful"];

// when window loads, add a click listener on the eight-ball div
// this will call our function when the user clicks on the Magic 8 Ball
window.onload = function() {
	let question = document.getElementById("question"); // input question id
	let eightball = document.getElementById("eight-ball"); // div eight-ball id
	let eight = document.getElementById("eight"); // p element eight id
	let answer = document.getElementById("answer"); // p element answer id

	// check if a question has been entered
	eightball.addEventListener("click", function() {
		if (question.value.length < 1) {
			// if not, display an alert to the user indicating he/she must enter a question
			alert("Enter a question!");
		} else {
			// if question is entered, remove the 8 text p element in the answer div
			eight.innerText = "";
			// get a random answer from our array of answers
			let num = Math.floor(Math.random() * Math.floor(answers.length));
			// finally, display the answer p element in the answer div 
			answer.innerText = answers[num];
		}
	});
}