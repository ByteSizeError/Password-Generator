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

  // password length 8 - 128
  var length = prompt("Enter a password length: 8 - 128"); 
  while (!/^[0-9]+$/.test(length) || length > 128 || length < 8) {
    alert("Please enter a number between 8 - 128");
    length = prompt("Enter a password length: 8 - 128");
  }
  
  // lowercase
  var lowercase = confirm("Yes for lowercase in password?"); 
  
  // uppercase
  var uppercase = confirm("Yes for uppercase in password?"); 
  
  // numerica
  var numerica = confirm("Yes for numerica in password?"); 
  
  // special character
  var special = confirm("Yes for special character in password?"); 


  return "password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
