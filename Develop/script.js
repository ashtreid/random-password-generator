// Assignment Code
var generateBtn = document.querySelector("#generate");
const abcUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const abcLow = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialChars = '!"#$%&()*+=,-_./:;<>?@[]^`{}|~';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
