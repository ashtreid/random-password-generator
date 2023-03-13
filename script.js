var generateBtn = document.querySelector("#generate");
const abcUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const abcLow = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialChars = '!"#$%&()*+=,-_./:;<>?@[]^`{}|~';

function generatePassword() {
    // Asks for the desired length with an input prompt
  var askPassLength = window.prompt("How long would you like your password? Choose a number between 8 - 128.")

  // Checks to see if the input is between 8 and 128. If not, it raises an alert on the window without returning the invalid input.
  if (askPassLength < 8 || askPassLength > 128) {
    alert("Invalid input.");
    return "";
  }
  
  // If the user clicks, cancel, it will end the prompt. I learned this from the recent student mini project solutions.
  if (!askPassLength) {
    return;
  }

  // Series of prompts that are then converted to uppercase letters
  var askLowCase = window.prompt("Would you like to include lowercase letters? Y/N").toUpperCase();
  var askUpCase = window.prompt("Would you like to include uppercase letters? Y/N").toUpperCase();
  var askNumeric = window.prompt("Would you like to include numbers? Y/N").toUpperCase();
  var askSpecialChars = window.prompt("Would you like to include special characters? Y/N").toUpperCase();

  // Variables to represent the correct answer format for comparing
  const yes = "Y";
  const no = "N";

  // Handles when the user answers "N" (no) to all prompts - it will tell then that they need to include at least one.
  if (askLowCase == no && askUpCase == no && askNumeric == no && askSpecialChars == no) {
    window.alert("You need to choose at least one character type. Please try again.");
    return "";
  };

  // I've learned this is a good way to handle turning data to strings and to represent what it is you are expecting.
  var userChoice = "";
  var password = "";

  // Handles all the prompts responses by comparing to the 'yes' const and then applying the appropriate variable as a string.
  // It also handles the case when the user clicks "cancel" - it will end the prompts. 
  if (askLowCase == yes) {
    userChoice += abcLow; 
  } else if (!askLowCase) {
    return;
  };

  if (askUpCase == yes) {
    userChoice += abcUp;
  } else if (!askUpCase) {
    return;
  };

  if (askNumeric == yes) {
    userChoice += numbers;
  } else if (!askNumeric) {
    return;
  };

  if (askSpecialChars == yes) {
    userChoice += specialChars;
  } else if (!askSpecialChars) {
    return;
  };

  // Uses a for loop to determine the length chosen by the user and then grabs random items out of the userChoice which is using the consts at the top of the page.
  // Then it returns the randomized password as a string.
  for (var i = 0; i < askPassLength; i++) {
    var randomCharIndex = Math.floor(Math.random() * userChoice.length);
    password += userChoice.charAt(randomCharIndex);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Adds event listener when the button in the UI is clicked.
generateBtn.addEventListener("click", writePassword);
