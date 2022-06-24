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
    window.confirm("Please enter a number between 8 and 128.");
  }

  // Set user input as passwordArray length
  passwordArray.length = passwordLength;

  // Asks user what characters they want to be in password
  window.alert("Next you will choose the specifications for your password. Select OK on at least one of the following.");
  var passwordLowerCase = window.confirm("Select OK if you would like your password to contain lower case letters.");

  var passwordUpperCase = window.confirm("Select OK if you would like your password to contain upper case letters");
    
  var passwordSpecial = window.confirm("Select OK if you would like your password to contain special characters");

  var passwordNumbers = window.confirm("Select OK if you would like your password to contain numbers");
 

  // Step 2: Generate the password based on the criteria
  // a) Create 4 arrays that hold possible lower case, upper case, and special characters and numbers
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var specailChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
  var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // var allCharacters = lowerCase.concat(upperCase, specailChar, number);

  if (passwordLowerCase) {
    babySelection = lowerCase;
    // console.log("Your password may contain lower case letters.");
  } else {
      // console.log("Your password will not conatin lower case letters");
  }

  if (passwordUpperCase) {
    babySelection = babySelection.concat(upperCase);
    // console.log("Your password may contain upper case letters.");
  } else {
      // console.log("Your password will not conatin upper case letters");
  }

  if (passwordSpecial) {
    babySelection = babySelection.concat(specailChar);
    // console.log("Your password may contain special characters.");
    // console.log(babySelection);
  } else {
      // console.log("Your password will not conatin special characters");
      // console.log(babySelection);
  }

  if (passwordNumbers) {
    babySelection = babySelection.concat(number);
    // console.log("Your password may contain numbers.");
    // console.log(babySelection);
  } else {
      // console.log("Your password will not conatin numbers");
      // console.log(babySelection);
  }

  // var index = Math.floor(Math.random() * babySelection.length);
  // console.log(index);

  // console.log(babySelection);  
  for (var i = 0; i < parseInt(passwordLength); i++) {
    var index = Math.floor(Math.random() * (babySelection.length + 1));
    console.log(index);
    passwordArray[i] = babySelection[index];
  }

  console.log(passwordArray);

  var passwordString = passwordArray.join("");
  console.log(passwordString);

  // for (var i = 0; i < passwordLength; i++) {
  //   if(password)
  // }

  // Step 4: Display password to the page
  return passwordString;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

