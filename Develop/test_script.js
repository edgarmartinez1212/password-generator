// old code 11.7.22-11.9.22
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let special = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
let charactersArr = [];
let myPassword = "";

let passwordLength = "";
let isLowerCase = false;
let isUpperCase = false;
let isNumber = false;
let isSpecial = false;

// alert(`isLowerCase: ${isLowerCase}\nisUpperCase: ${isUpperCase}\nisNumeric: ${isNumeric}\nisSpecial: ${isSpecial}`);

// get password length & verify it meets requirements
// relies on passwordLength === ""
function getPasswordLength() {
  while (passwordLength === "") {
    passwordLength = prompt("Length of password [at least 8 characters, no more than 128]");

    if (Number(passwordLength) < 8 || Number(passwordLength) > 128 || isNaN(passwordLength)) {
      alert(`Must choose a length [8-128]`);
      passwordLength = "";
    } else {
      userTypes();
      // return true?
    }
  }
}

// asks user for character types, if none are chosen passwordLength = ""
// return passwordLength
function userTypes() {
  isLowerCase = confirm("Include lowercase characters?");
  isUpperCase = confirm("Include uppercase characters?");
  isNumber = confirm("Include numeric characters?");
  isSpecial = confirm("Include special characters?");

  if (!isLowerCase && !isUpperCase && !isNumber && !isSpecial) {
    alert(`Must select atleast 1 character type!`);
    passwordLength = "";
  } else {
    createCharacterArr();
  }
}

// creates character array based on user chosen types
// returns password length as number
function createCharacterArr() {
  if (isLowerCase) charactersArr.push(lowerCase);
  if (isUpperCase) charactersArr.push(upperCase);
  if (isNumber) charactersArr.push(numbers);
  if (isSpecial) charactersArr.push(special);

  passwordLength = Number(passwordLength);
}

// creates random number
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// edgars creation
function generatePassword() {
  // get password length
  getPasswordLength();

  // passlength = number
  let index = 0;
  for (let i = 0; i < passwordLength; i++) {
    if (index === charactersArr.length) {
      index = 0;
    }
    myPassword += charactersArr[index][getRandomNumber(charactersArr[index].length)];
    index++;

    console.log(`i: ${i}\nindex: ${index}\nmyPassword: ${myPassword}`);
  }
  return myPassword;
}

// ------------ code created by the mothership ------------

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// writePassword();
