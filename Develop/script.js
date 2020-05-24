// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  var length = prompt("Please enter a password");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword () {

    for.generatePassword
    var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
 }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
