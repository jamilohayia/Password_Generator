// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log("Javascript");

// Variables used for password generation. 
var numbers = "0123456789";
var special = "!@#$%^&*<>";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvqxyz";
var length = 0;


// Write password to the #password input
function generatePassword() {
  alert("Passwords lengths must be between 8 and 128 characters.")
  var length = prompt("How many characters would you like for your password to be?");
  while (length < 8 || length > 128 || isNaN(length)) { 
  var length = prompt("Please enter a number between 8 and 128."); 
  }

// These are the list of confirms used after the initial question for password length is answered.  
  var UserUpper = confirm("Would you like to include uppercase letters?")
  var UserLower = confirm("Would you like to include lowercase letters?")
  var UserNumbers = confirm("Would you like to include numbers?")
  var UserSpecial = confirm("Would you like to include special characters?")

  var FinalPw ="";

  // These are the if else statements used to generate the combination of password outcomes. 
  if (UserUpper === true) {
    FinalPw += upper; 
  }

  if (UserLower === true) {
    FinalPw += lower; 
  }
  
  if (UserNumbers === true) {
    FinalPw += numbers; 
  }
  
  if (UserSpecial === true) {
    FinalPw += special; 
  }
         
  // Variable used for the string. 
  var userPassword = "";
  
  // This loop is created to create the user specific length for the password. 
  console.log(FinalPw)
  for (i = 0; i < length; i++) {
    userPassword = userPassword + FinalPw[Math.floor(Math.random() * FinalPw.length)];
  }

  return userPassword;

}

function writePassword() {                         
  var password = generatePassword();
console.log("Generated Password", password)
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);