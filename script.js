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
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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
  'z'
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
  'Z'
];

let smallMin = 10;
let smallMax = 20;
let mediumMin = 20;
let mediumMax = 45;
let largeMin = 45;
let largeMax = 64;

// Function to prompt user for password options
function getPasswordOptions() {
  let userChoice = prompt("please choose a password length: small , medium or large");
  if (userChoice.toLowerCase() === "small"){
    let passwordSize = Math.round(Math.random() * (smallMax - smallMin) + smallMin);
    console.log(passwordSize)
  } else if (userChoice.toLowerCase() === "medium"){
    let passwordSize = Math.round(Math.random() * (mediumMax - mediumMin) + mediumMin);
    console.log(passwordSize)
  } else if (userChoice.toLowerCase() === "large"){
    let passwordSize = Math.round(Math.random() * (largeMax - largeMin) + largeMin);
    console.log(passwordSize)
  } else 
  alert(userChoice + " is not an acceptable password length. Please choose 'small', 'medium', or 'large'")
}


// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

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
generateBtn.addEventListener('click', getPasswordOptions);


//pseudocode for this task

//step 1 - user clicks generate password and are promted if they want to create a password that is 'small', 'medium' or 'large in lenght ---- small = more than 10 but less than 20, medium = more than 20 but less than 45, large = more than 45 but less than 64

//step 2 they are prompted seperately if they want the password to include lowercase, uppercase , numeric, and special characters --- they must accept atleast 1 

//step 3 they will then recieve a generated password within the text box.
//getPasswordOptions()