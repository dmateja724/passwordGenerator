"use strict";
var $ = function(id) { 
    return document.getElementById(id); 
};

// generates a random number to be associated with a character position in "chars"
var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random();               //value >= 0.0 and < 1.0
        random = Math.floor(random * max);   //value is an integer between 0 and max - 1
        random = random + 1;                //value is an integer between 1 and max
    }
    return random;
};


// gives functionality to "get password" button 
var generatePassword = function() {
    var passChar = "";             // single random character variable
    var pass = "";                // generated password container
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@"; // pool of characters to be chosen 
    var i = 0;                  // counter variable
    
    // validation for a numeric entry
    if (isNaN($("num").value) || ($("num").value == "")) {
        alert("Please enter a valid number.");
        $("num").value = "";
        $("num").focus();
    } 
    
    // loop that grabs random characters and builds the password
    while (i < $("num").value) {
        i++;
        var random = getRandomNumber(chars.length - 1);
        passChar = chars[random];
        pass += passChar;
    }
    $("password").value = pass;     // displays password to the user
};

// gives the "clear" button functionality 
var clearFields = function() {
    $("num").value = "";
    $("password").value = "";
    $("num").focus();
};

window.onload = function() {
    $("generate").onclick = generatePassword;
    $("clear").onclick = clearFields;
    $("num").focus();
};