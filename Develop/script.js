// variables //
let lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialArr = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
let charactersArr = [];
let myPassword = "";

let passwordLength = "";
let isLowerCase = false;
let isUpperCase = false;
let isNumber = false;
let isSpecial = false;

// functions //
// reset all variabls
function resetAll() {
  charactersArr = [];
  myPassword = "";
  passwordLength = "";
  isLowerCase = false;
  isUpperCase = false;
  isNumber = false;
  isSpecial = false;
}

// checks passwordLength is empty
function checkPasswordLength() {
  return passwordLength === "";
}

// returns random number upto max value
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// creates myPassword using input length and chosen characters
function createPassword() {
  passwordLength = Number(passwordLength);
  let index = 0;
  for (let i = 0; i < passwordLength; i++) {
    if (index === charactersArr.length) {
      index = 0;
    }
    myPassword += charactersArr[index][getRandomNumber(charactersArr[index].length)];
    index++;

    console.log(`i: ${i}\nindex: ${index}\nmyPassword: ${myPassword}`);
  }
}

// creates array of users chosen characters
function createCharacterArr() {
  if (isLowerCase) charactersArr.push(lowerCaseArr);
  if (isUpperCase) charactersArr.push(upperCaseArr);
  if (isNumber) charactersArr.push(numbersArr);
  if (isSpecial) charactersArr.push(specialArr);
}

// password requirement 2
// validates character types
function getCharcterTypes() {
  isLowerCase = confirm("Include lowercase characters?");
  isUpperCase = confirm("Include uppercase characters?");
  isNumber = confirm("Include numeric characters?");
  isSpecial = confirm("Include special characters?");

  if (!isLowerCase && !isUpperCase && !isNumber && !isSpecial) {
    alert(`Must select atleast 1 character type!`);
    passwordLength = "";
  }
}

// password requirement 1
// validates password length
function getPasswordLength() {
  passwordLength = prompt("Length of password [at least 8 characters, no more than 128]");

  if (passwordLength === null)
    return;
  if (Number(passwordLength) < 8 || Number(passwordLength) > 128 || isNaN(passwordLength)) {
    alert(`Must choose a length [8-128]`);
    passwordLength = "";
  }
}

// validates password requirements
function getPasswordRequirements() {
  resetAll();
  while (checkPasswordLength()) {
    getPasswordLength();

    if (!checkPasswordLength()) {
      getCharcterTypes();
    }
  }
}

// creates myPassword
// returns myPassword
function generatePassword() {
  getPasswordRequirements();
  createCharacterArr();
  createPassword();

  return myPassword;
}

// ------------ code created by the mothership ------------

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  console.log(`writePassword()\npassword: ${password}\npasswordText: ${passwordText}`);

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
