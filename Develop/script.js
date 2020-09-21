///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

// all your code goes here.
  


function generatePassword() {

  var PWselector = "";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var symbols = "@#$!%&*^<>?";
  
  
  var newPassword = "";
  var PWlg = parseInt(prompt("How long is your password (8 - 128)?"));
  if (PWlg < 8 || PWlg > 128) {
    alert("Must enter a number between 8 - 128!");
     return '';     
    } 

  var wantsUppercase = confirm("Would you like uppercase letters in your password?");
  var wantsLowercase = confirm("Would you like lowercas letters in your password");
  var wantsNumbers = confirm("Would you like numbers in your password?");
  var wantsSymbols = confirm("Would you like symbols in your password?");
        
    if (wantsUppercase == false && wantsLowercase == false && wantsNumbers == false && wantsSymbols == false) {
      alert("Must select a cobination of case, symbols, and/or numbers!");  
      return '';       
    }    

      if (wantsUppercase) {
        PWselector += uppercase
  }
     if (wantsLowercase) {
        PWselector += lowercase
  }
     if (wantsNumbers) {
       PWselector += numbers
  }
     if (wantsSymbols) {
       PWselector += symbols
  }  
     
        for (i = 0; i < PWlg; i++) {
          var char = Math.floor(Math.random() * PWselector.length);
          newPassword += PWselector[char]
        }
            
      return newPassword;
    }

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
