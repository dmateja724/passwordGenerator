"use strict";
var $ = function(id) { return document.getElementById(id); };

var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random(); //value >= 0.0 and < 1.0
        random = Math.floor(random * max); //value is an integer between 0 and max - 1
        random = random + 1; //value is an integer between 1 and max
    }
    return random;
};

var generatePassword = function() {
    $("password").value = ""; // clear previous entry
    var passChar = "";
    var pass = "";
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
    var i = 0;
    
    
    if (isNaN($("num").value)) {
        alert("Please enter a valid number.");
        $("num").value = "";
        $("num").focus();
    } 
    
    while (i < $("num").value) {
        i++;
        var random = getRandomNumber(chars.length);
        passChar = chars[random];
        pass += passChar;
    }
    $("password").value = pass;
};

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