// Assignment code here
// These are the all characters that will be used to create the password
let specialcharchoices = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
let numbers = "0123456789";
let letters = "abcdefghijklmnopqrstuvwxyz";
let lowercase = letters.toUpperCase();

// These are the prompts that the user will receive their computer after they click generate password.
function generatePassword() {
  let length = prompt(
    "How long do you want your password to be? Please enter a number 8 to 128"
  );

  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Chosen number must be between 8 to 128.");
  } else {
    let confirmspecial = confirm(
      "do you want special characters in your password?"
    );
    let confirmupper = confirm(
      "do you want Upper Case letters in your password?"
    );
    let confirmlower = confirm(
      "do you want lower case letters in your password?"
    );
    let confirmnuber = confirm("do you want numbers in your password?");
    return myPassword();
  }
}

// This function contains all the possible combinations that the user can choose from.
function myPassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
