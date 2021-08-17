// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // password criterias
  var length = 0; // password length 8 - 128
  var lowercase = false; // lowercase
  var uppercase = false; // uppercase
  var numerica = false; // numerica
  var special = false; // special character

  return "password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
