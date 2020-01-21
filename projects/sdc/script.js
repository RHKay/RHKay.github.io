
  const inputs = Array.from(document.getElementsByTagName("input"));
  const actualHours = Array.from(document.getElementsByClassName("hours"));
  const result = document.getElementById("result");

  const clearBtns = function(btnBox) {
  Array.from(
    // querySelectorAll to select all input tag names, but ignore the button with the .ignore class
    // so the background color doesn't change
    document.getElementById(btnBox).querySelectorAll("INPUT:not(.ignore)")
  ).forEach(input => (input.style.backgroundColor = "#fff"));
  };

const userInput = function(el) {
  // remove the animation for the result text
  result.className = "animated zoomOutDown";

  //targeting element "el", finding the containing parent element and it's ID
  clearBtns(el.target.parentElement.id);

  //targeting the elements containing parent ID, in this case it's the input buttons parent element
  switch (el.target.parentElement.id) {
    case "ideal": 
      //finding the value of the ideal sleep hours as inputted by user and changing the HTML of the ideal-hours span element
      document.getElementById("ideal-hours").textContent = el.target.value;
      //now taking the user input for ideal-hours, targeting ideal-hours-week ID, and changing the HTML by running the calculation
      document.getElementById("ideal-hours-week").textContent = el.target.value * 7;
      //changing the background color of the selected input button
      el.target.style.backgroundColor = "#4fe0b6";
      break;
    case "sunday":
      // targeting the input button for sunday when the user makes a selection for sleep hours on sunday
      document.getElementById("sunday-hours").textContent = el.target.value;
      // changing the background color of the selected input button for sunday
      el.target.style.backgroundColor = "#4fe0b6";
      break;
    //doing the same thing for the rest of the days of the week
    case "monday":
      document.getElementById("monday-hours").textContent = el.target.value;
      el.target.style.backgroundColor = "#4fe0b6";
      break;
    case "tuesday":
      document.getElementById("tuesday-hours").textContent = el.target.value;
      el.target.style.backgroundColor = "#4fe0b6";
      break;
    case "wednesday":
      document.getElementById("wednesday-hours").textContent = el.target.value;
      el.target.style.backgroundColor = "#4fe0b6";
      break;
    case "thursday":
      document.getElementById("thursday-hours").textContent = el.target.value;
      el.target.style.backgroundColor = "#4fe0b6";
      break;
    case "friday":
      document.getElementById("friday-hours").textContent = el.target.value;
      el.target.style.backgroundColor = "#4fe0b6";
      break;
    case "saturday":
      document.getElementById("saturday-hours").textContent = el.target.value;
      el.target.style.backgroundColor = "#4fe0b6";
      break;
    case "calculate":
      // create an empty array of the actual sleep hours the user inputted
      let actualSleepHours = [];
      // idealSleepHours equals the number format of the user inputted ideal sleep hours per week calculation
      let idealSleepHours = Number(document.getElementById("ideal-hours-week").textContent);
      // push the number format of the HTML for each of the hours the user inputted for each day of the week
      actualHours.map(item => actualSleepHours.push(Number(item.textContent)));
      // .reduce() adds up all the actualSleepHours in the array
      // takes the total and current amount and cycles through example hours array [5,6,6,7,5,6,7]
      // so it takes the 5 and adds the 6 to it, then takes that amount and adds the next 6, then that amount and adds the 7.....
      // then returns the total value
      actualSleepHours = actualSleepHours.reduce((total, amount) => total + amount);

      if (actualSleepHours === idealSleepHours) {
        result.textContent = "You got the perfect amount of sleep!";
      } else if (actualSleepHours > idealSleepHours) {
        result.textContent = `You are ${actualSleepHours - idealSleepHours} hours under over sleep goal. You got more sleep than needed!`;
      } else if (actualSleepHours < idealSleepHours) {
        result.textContent = `You are ${idealSleepHours - actualSleepHours} hours under your sleep goal. You should get some more rest!`;
      } else {
        alert("ERROR!!! Something went wrong!");
      }
      // add the animation for the result
      result.className = "animated zoomInUp";
  } // end of switch statement
} // end of userInput() function

// targeting the item inside the button inputs
for (let item in inputs) {
  // adding an event listener to each input button to run the userInput() function on click
  // inputs is variable declared in the beginning for the input buttons
  inputs[item].addEventListener("click", userInput);
}




