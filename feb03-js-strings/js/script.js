var firstString = "A literal string";
var secondString = new String("A string object");
var concatString = firstString + "," + secondString;

var firstName = "Marisa";
var lastName = "Gonzalez";
var fullname = firstName + " " + "lol" + " " + lastName;

String = firstString.concat(secondString);

// console.log( concatString );
// console.log(fullname);

var getIndex = firstString.lastIndexOf("i");

var future = 2020;
var myBirth = 1999;
var newAge = future - myBirth;
var middleName = "Alexandera"

var sent = "My name is" + " "+ firstName + " " + middleName + " " + lastName + ". " + "I was born in" + " "+ myBirth + " " + "and in 2020, I will be" + " " + newAge;

console.log(sent);
