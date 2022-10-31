// Assignment code here
// These are the all characters that will be used to create the password
let specialcharchoices = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
let numbers = "0123456789";
let letters = "abcdefghijklmnopqrstuvwxyz";
let uppercase = letters.toUpperCase();

// These are the prompts that the user will receive their computer after they click generate password.
function generatePassword() {
  let length = prompt(
    "How long do you want your password to be? Please enter a number 8 to 128"
  );

  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Chosen number must be between 8 to 128.");
    return "";
  } else {
    // Confirm returns a boolean value. Variables are created for the Confirm method in order to hold the value
    // for use in the following for loop.
    let confirmspecial = confirm(
      "do you want special characters in your password?"
    );
    let confirmupper = confirm(
      "do you want Upper Case letters in your password?"
    );
    let confirmlower = confirm(
      "do you want lower case letters in your password?"
    );
    let confirmnumber = confirm("do you want numbers in your password?");

    let randomPassword = ""; // this variable is declared outside the for loop because if declared inside the loop
    // it would not be accessible outside the for loop.

    for (let i = 0; i < length; i++) {
      let realPassword = "";
      // the if statements below are created for each of the choices the user can choose from. Whatever choice is chosen will be concatenated
      // to form the variable "realPassword".
      if (confirmspecial) {
        realPassword += specialcharchoices;
      }

      if (confirmnumber) {
        realPassword += numbers;
      }

      if (confirmlower) {
        realPassword += letters;
      }

      if (confirmupper) {
        realPassword += uppercase;
      }
      if (
        // This if statement was added in case the user chose "cancel" for each choice. It will return "".
        confirmupper == false &&
        confirmlower == false &&
        confirmspecial == false &&
        confirmnumber == false
      ) {
        alert("You did not choose a character type. You must choose at least one character type in order to generate a password.");
        return "";
      }
      let randomnumber = Math.floor(Math.random() * realPassword.length);
      randomPassword = randomPassword + realPassword[randomnumber];
    }
    return randomPassword;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password == "") {
    // This was added in case the user chose "cancel" for each choice.
    return;
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
