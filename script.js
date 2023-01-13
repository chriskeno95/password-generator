// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
// creating an empty array in which i will pass data into if the user chooses certain options.
let passwordArray1 = [];
let passwordArray2 = [];
let passwordArray3 = [];
let userPassword = []
let password = "";


// setting password size as zero as this will have its value randomly set later 
let passwordSize = 0
//creating password length parameters.
let smallMin = 10;
let smallMax = 20;
let mediumMin = 20;
let mediumMax = 45;
let largeMin = 45;
let largeMax = 64;
let lowerCase;

// Function to prompt user for password size that will be randomly set using math.random and setting  min-max intergers
function getPasswordSize() {
  let userChoice = prompt("please choose a password length: small , medium or large");
  if (userChoice.toLowerCase() === "small"){
    passwordSize = Math.round(Math.random() * (smallMax - smallMin) + smallMin);
    prompt(getPasswordCharacterOptions())
  } else if (userChoice.toLowerCase() === "medium"){
    passwordSize = Math.round(Math.random() * (mediumMax - mediumMin) + mediumMin);
    prompt(getPasswordCharacterOptions())
  } else if (userChoice.toLowerCase() === "large"){
    passwordSize = Math.round(Math.random() * (largeMax - largeMin) + largeMin);
    prompt(getPasswordCharacterOptions())
  } else 
  alert(userChoice + " is not an acceptable password length. Please choose 'small', 'medium', or 'large'")
  return
}

// function to prompt user to see if they want their password to contain lowercase characters. If they choose yes, the lowercase and upper case arrays will be added to the empty 'passwordArray'.
function getPasswordCharacterOptions(){
let charachterCaseOption = prompt("do you want the password to contain Lowercase and Uppercase characters? Please choose 'yes' (y) for both, or 'no' (n) for only one");
if (charachterCaseOption.toLowerCase() === "yes" || charachterCaseOption.toLowerCase() === "y"){
passwordArray1 = upperCasedCharacters.concat(lowerCasedCharacters);
prompt(getPasswordNumericalOptions())
 } else if (charachterCaseOption.toLowerCase() === "no" || charachterCaseOption.toLowerCase() === "n"){passwordArray1 = lowerCasedCharacters
  prompt(getPasswordNumericalOptions())
} else 
alert(charachterCaseOption + " is not recognised. Please choose 'yes' (y) or 'no'. (n)");
return
}

//function to prompt user to see if they want to include numerical characters to their password or not. if yes, then both the numeric and special character arrays will be added to the 'passwordArray' as the content it holds at this point.
 function getPasswordNumericalOptions(){
  let numericSpecialCharacterOption = prompt("do you want the password to contain Numeric and Special characters? Please choose 'yes' (y) for both or 'no' (n), for only one");
if (numericSpecialCharacterOption.toLowerCase() === "yes" || numericSpecialCharacterOption.toLowerCase() === "y"){
passwordArray2 = numericCharacters.concat(specialCharacters);
passwordArray3 = passwordArray1.concat(passwordArray2);
userPassword = passwordArray3;
generatePassword();


 } else if (numericSpecialCharacterOption.toLowerCase() === "no" || numericSpecialCharacterOption.toLowerCase() === "n"){
  passwordArray2 = passwordArray1.concat(numericCharacters);
  userPassword = passwordArray2
  generatePassword();
} else 
alert(numericSpecialCharacterOption + " is not recognised. Please choose 'yes' (y) or 'no'. (n)");
return
}

 

// Function for getting a random element from an array
function getRandom(arr) {

  let randomIndex = Math.floor(Math.random() * arr.length);
  let item = arr[randomIndex];

  return item;
}


// Function to generate password with user input
function generatePassword() {
  for (let index = 0; index < passwordSize; index++)
   password += getRandom(userPassword);
   alert("this is your generated password: " + password);
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', getPasswordSize);


//pseudocode for this task

//step 1 - user clicks generate password and are promted if they want to create a password that is 'small', 'medium' or 'large in lenght ---- small = more than 10 but less than 20, medium = more than 20 but less than 45, large = more than 45 but less than 64

//step 2 they are prompted seperately if they want the password to include lowercase, uppercase , numeric, and special characters --- they must accept atleast 1 

//step 3 they will then recieve a generated password within the text box.
//getPasswordOptions()