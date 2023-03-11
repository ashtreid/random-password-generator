// Assignment Code
var generateBtn = document.querySelector("#generate");
const abcUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const abcLow = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialChars = '!"#$%&()*+=,-_./:;<>?@[]^`{}|~';

function generatePassword() {
    // Asks for the desired length with an input prompt
  var askPassLength = window.prompt("How long would you like your password? Choose a number between 8 - 128.")

  // Checks to see if the input is between 8 and 128. If not, it raises an alert on the window without returning the invalid input.
  // Also, if the user clicks, cancel, it will end the prompt. I learned this from the recent student mini project solutions.
  if (askPassLength < 8 || askPassLength > 128) {
    alert("Invalid input.");
    return "";
  } else if (!askPassLength) {
    return;
  }

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
