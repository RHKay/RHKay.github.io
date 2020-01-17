var rps = {
	/* Properties */
	eYou: null, // holds the your move HTML container
	eCom: null, // holds the computer's move HTML container
	eSel: null, // holds the HTML rock, scissors, paper selector
	eGo: null, // holds the HTML go button
	eWin: null, wins: 0, // wins counter
	eLose: null, loses: 0, // loses counter
	eDraw: null, draws: 0, // draws counter

	/* Game Object with function property */
	load: function () {
		// load(): preload all the images
		
		var images = ["game-rock.png", "game-paper.png", "game-scissors.png"],
			img = null,
			loaded = 0;
		for (var i of images) {
			img = new Image();
			img.onload = function() {
				loaded++;
				if (loaded === images.length) {
					rps.init();
				}
			};
			img.src = i;
		}
	},

	init: function() {
		// init(): prepare the game
		
		// Get all the necessary game elements
		rps.eYou = document.getElementById("rps-your-move"); // your move div image holder
		rps.eCom = document.getElementById("rps-com-move"); // computer's move div image holder
		rps.eSel = document.getElementById("rps-you-sel"); // select box id
		rps.eGo = document.getElementById("rps-you-go"); // go button
		rps.eWin = document.getElementById("rps-win"); // winning score
		rps.eLose = document.getElementById("rps-lose"); // losing score
		rps.eDraw = document.getElementById("rps-draw"); // draw score

		// When the user changes rock, paper, scissors selection
		rps.eSel.addEventListener("change", rps.switch);
		rps.switch();

		// When the user hits "Go!"
		rps.eGo.addEventListener("click", rps.game);

		// Unlock all controls
		rps.eSel.disabled = false;
		rps.eGo.disabled = false;
	},

	/* Game Runs */
	switch: function() {
		// switch() : when user changes move
		
		var img = new Image(); // we want a new image
		img.src = "game-" + rps.eSel.value + ".png"; // the value of the new image can be one of the three images
		rps.eYou.innerHTML = ""; // your move div image holder will be blank
		rps.eYou.appendChild(img); // attach new image to your move div image holder
	},

	game: function() {
		// game() : game on!
		
		// Random computer move - Equals 33.3333% chance to get each
		var comMove = Math.random(); // computer's move will be random
		if (comMove <= 0.33) {
			comMove = "rock"; // "rock" string is the value associated with the option HTML tag, same for "paper", and "scissors" strings
		} else if (comMove <= 0.67) {
			comMove = "paper";
		} else {
			comMove = "scissors";
		}

		// Update computer move graphic
		var img = new Image();
		img.src = "game-" + comMove + ".png"; // change image depending on which option is selected by computer
		rps.eCom.innerHTML = ""; // computer's move div image holder is blank
		rps.eCom.appendChild(img); // attach new image to computer's move div image holder

		// Win, lose, or draw?
		var yourMove = rps.eSel.value; // variable will be the value of which selection is made in the select box by the user
		// setting up for the user and computer choosing the same move
		if (yourMove === comMove) {
			rps.draws++; // add a score of one to the draw score
			rps.eDraw.innerHTML = rps.draws; // draw HTML score will show new score, for example, it will change from 0 to 1
			alert("Draw!!"); // an alert will pop up saying game is a draw
		} else {
			var win = true; // set win as true and compare user choice to computer choice to determine if user wins or loses
			switch (yourMove) {
				case "rock":
					if (comMove === "paper") { // paper covers rock
						win = false; // if rock is chosen by user, and computer chooses paper, user loses
					}
					break;
				case "paper":
					if (comMove === "scissors") { // scissors cuts paper
						win = false; // if paper is chosen by user, and computer chooses paper, user loses
					}
					break;
				case "scissors":
					if (comMove === "rock") { // rock smashes scissors
						win = false; // if scissors is chosen by user, and computer chooses rock, user loses
					}
					break;
			}

			// setting up if the user to wins, win variable is still set to true
			if (win) {
				rps.wins++; // if user wins, increase winning score by 1
				rps.eWin.innerHTML = rps.wins; // wins is the winning score counter, the HTML of this will now equal the change of the counter
				alert("You Win!!"); // notify the user they won the game
			} else {
				rps.loses++; // other wise, if user loses, increase the losing score by 1
				rps.eLose.innerHTML = rps.loses; // losing score will change
				alert("You Lose!!"); // alert the user they lost the game
			}
		}
	}
};
window.addEventListener("load", rps.load);







