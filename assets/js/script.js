// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Create babySelection to be array that will later hold possible characters user wants in password
  var babySelection = [];
  
  // Create an array that will later hold the password
  var passwordArray = [];

  // Prompt user to enter password length
  var passwordLength = window.prompt("Enter the number of characters you would like in your password. (Must be between 8 and 128 characters.");

  // Validate that user input is a number between 8 and 128
  if (passwordLength > 7 && passwordLength < 129) {
  } else {
    window.confirm("Please try again. Next time enter a number between 8 and 128.");
    return;
  }

  // Set user input as passwordArray length
  passwordArray.length = passwordLength;

  // Describe next steps of process and tell user they must select OK to at least one of the specifications
  window.alert("Next you will choose the specifications for your password. Select OK on at least one of the following.");

  // Ask user if they want lower case letters
  var passwordLowerCase = window.confirm("Select OK if you would like your password to contain lower case letters.");

  // Ask user if they want upper case letters
  var passwordUpperCase = window.confirm("Select OK if you would like your password to contain upper case letters");
    
  // Ask user if they want special characters
  var passwordSpecial = window.confirm("Select OK if you would like your password to contain special characters");

  // Ask user if they want numbers
  var passwordNumbers = window.confirm("Select OK if you would like your password to contain numbers");
 

  // Generate the password based on the criteria
  // Create 4 arrays that hold possible lower case, upper case, and special characters and numbers
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var specailChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '"', '+', '-', ',', '.', '/', ':', '=', '>', '<', '?', '[', ']', '{', '}', '^', '_', '`', '~', "|"];
  var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // If user selects OK for lower case letters, it adds the array of lower case letters to the array that contains possible characters for password
  if (passwordLowerCase) {
    babySelection = lowerCase;
  } else {

  }

  // If user selects OK for uppper case letters, it adds the array of upper case letters to the array that contains possible characters for password
  if (passwordUpperCase) {
    babySelection = babySelection.concat(upperCase);
    
  } else {
      
  }

  // If user selects OK for special characters, it adds the array of special characters to the array that contains possible characters for password
  if (passwordSpecial) {
    babySelection = babySelection.concat(specailChar);
    
  } else {
      
  }

  // If user selects OK for numbers, it adds the array of numbers to the array that contains possible characters for password
  if (passwordNumbers) {
    babySelection = babySelection.concat(number);
    
  } else {
  
  }
 
  // Selects random characters that will be characters in password
  for (var i = 0; i < parseInt(passwordLength); i++) {
    var index = Math.floor(Math.random() * (babySelection.length + 1));
    console.log(index);
    passwordArray[i] = babySelection[index];
  }

  // Creates a variable to hold a string that contains the characters from the password array
  var passwordString = passwordArray.join("");
  

  // Gives the variable that is the string for the password so it displays onto the page
  return passwordString;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

