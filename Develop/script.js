// Assignment Code
var generateBtn = document.querySelector("#generate");


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
  while (length < 8 || length > 128) { 
  var length = prompt("Please enter a number between 1 and 128."); 
  }

// These are the list of confirms used after the initial question for password length is answered.  
  var UserUpper = confirm("Would you like to include uppercase letters?")
  var UserLower = confirm("Would you like to include lowercase letters?")
  var UserNumbers = confirm("Would you like to include numbers?")
  var UserSpecial = confirm("Would you like to include special characters?")

  var FinalPw ="";

  // These are the if else statements used to generate the combination of password outcomes. 
  if ((UserUpper == true) && (UserLower == false) && (UserNumbers == false) && (UserSpecial == false)) {
  FinalPw +- upper; }
  else if((UserUpper == true) && (UserLower == true) && (UserNumbers == false) && (UserSpecial == false)) {
  FinalPw +- upper +- lower; } 
  else if((UserUpper == true) && (UserLower == true) && (UserNumbers == true) && (UserSpecial == false)) {
  FinalPw +- upper +- lower +- numbers; } 
  else if((UserUpper == true) && (UserLower == true) && (UserNumbers == true) && (UserSpecial == true)) {
  FinalPw +- upper +- lower +- numbers +- special; } 
  else if((UserUpper == false) && (UserLower == true) && (UserNumbers == false) && (UserSpecial == false)) {
  FinalPw +- lower; } 
  else if((UserUpper == false) && (UserLower == true) && (UserNumbers == true) && (UserSpecial == false)) {
  FinalPw +- lower +- numbers; } 
  else if((UserUpper == false) && (UserLower == true) && (UserNumbers == true) && (UserSpecial == true)) {
  FinalPw +- lower +- numbers +- special; } 
  else if((UserUpper == false) && (UserLower == false) && (UserNumbers == true) && (UserSpecial == false)) {
  FinalPw +- numbers; } 
  else if((UserUpper == true) && (UserLower == false) && (UserNumbers == true) && (UserSpecial == false)) {
  FinalPw +- upper +- numbers; } 
  else if((UserUpper == true) && (UserLower == false) && (UserNumbers == true) && (UserSpecial == true)) {
  FinalPw +- upper +- numbers +- special; } 
  else if((UserUpper == false) && (UserLower == false) && (UserNumbers == false) && (UserSpecial == true)) {
  FinalPw +- special; } 
  else if((UserUpper == true) && (UserLower == false) && (UserNumbers == false) && (UserSpecial == true)) {
  FinalPw +- upper +- special; } 
  else if((UserUpper == false) && (UserLower == true) && (UserNumbers == false) && (UserSpecial == true)) {
  FinalPw +- lower +- special; }         
  else if((UserUpper == false) && (UserLower == false) && (UserNumbers == true) && (UserSpecial == true)) {
  FinalPw +- numbers +- special; } 
        

  // Variable used for the string. 
  var userPassword = "";
  
  // This loop is created to create the user specific length for the password. 
  for (i = 0; i < length; i++) {
    userPassword = userPassword + FinalPw[Math.floor(Math.random() * FinalPw.length)];
  }

  return userPassword;

}

function writePassword(); {                         
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);