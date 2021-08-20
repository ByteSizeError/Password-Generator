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

  // makes sure the value entered is between 8 - 128 and also a number
  while (!/^[0-9]+$/.test(length) || length > 128 || length < 8) {
    alert("Please enter a number between 8 - 128");
    length = prompt("Enter a password length: 8 - 128");
  }

  // lowercase
  var lowercase = confirm("Yes for lowercase in password?");

  // uppercase
  var uppercase = confirm("Yes for uppercase in password?");

  // numeric
  var numeric = confirm("Yes for numeric in password?");

  // special character
  var special = confirm("Yes for special character in password?");

  // checks to make sure one character type is selected
  while (!lowercase && !uppercase && !numeric && !special) {
    alert("Please select at least one character type");
    var lowercase = confirm("Yes for lowercase in password?");
    var uppercase = confirm("Yes for uppercase in password?");
    var numeric = confirm("Yes for numeric in password?");
    var special = confirm("Yes for special character in password?");
  }

  // checking criteria values
  console.log("length:", length);
  console.log("lowercase:", lowercase)
  console.log("uppercase:", uppercase)
  console.log("numeric:", numeric)
  console.log("special:", special)

  const lowers = "abcdefghijklmnopqrstuvwxyz";
  const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "1234567890";
  const specials = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";

  var password = "";
  var criteria = "";

  if (lowercase) {
    criteria += lowers;
  }

  if (uppercase) {
    criteria += uppers;
  }

  if (numeric) {
    criteria += numbers;
  }

  if (special) {
    criteria += specials;
  }

  for (let i = 0; i < length; i++) {
    password += criteria[Math.floor(Math.random() * criteria.length)];
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
