// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var length = prompt("Passwords lengths must be between 8 and 128 characters.  How many characters would you like for your password to be?");
  while (length < 8 || length > 128) { 
  var length 
  }

}



generateBtn.addEventListener("click", function() {
if (generateBtn) {
  
  if length = prompt("Please choose a number ")
}



// Prompts for the user input.  
  function generatePassword () { 
  var UserUpper = confirm("Would you like to include uppercase letters?")
  var UserLower = confirm("Would you like to include lowercase letters?")
  var UserNumbers = confirm("Would you like to include numbers?")
  var UserSpecial = confirm("Would you like to include special characters?")

}


// Variables used for password generation. 
var numbers = "0123456789";
var special = "!@#$%^&*<>";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvqxyz";
var FinalPw ="";
var password = generatePassword();



if (UserUpper===true){
  FinalPw =  FinalPw + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
};

if (UserLower===true){
  FinalPw =  FinalPw + "abcdefghijklmnopqrstuvqxyz"
};

if (UserNumbers===true){
  FinalPw =  FinalPw + "0123456789"
};

if (UserSpecial===true){
  FinalPw =  FinalPw + "!@#$%^&*<>"
};

var password = "";

for (i = 0; i < length; i++){
  var password = password + Array.from(FinalPw)[(Math.floor(Math.random() * FinalPw.length))];
};


var passwordText = document.querySelector("#password");

passwordText.value = password;




