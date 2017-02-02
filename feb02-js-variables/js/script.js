/*
var externalJavascript = "what da actual heck";
^           ^          ^          ^           ^
keyword   name      assignment   value        end
                    operator
*/

// var CamelCase;
// var not_camel_case;
// var camel_Case;
// var $dollarCase;
// var dollar4$case;
//
//no no BAD code
// var 1stVariabl;
// var varible;
// var UppercaseCamel;
// var SUPERUPPERCASE;

var myNumberObject=7;

var myNewNumberObject = myNumberObject.toString();

 // console.log(myNumberObject);
 // console.log(myNewNumberObject);

//STRING OBJECT
var myStringObject = "This is a string object";
var myOtherStringObject= 'This is also a string object';

//var myNonWorkingStringObject= 'This wont work"
//var myPoorGrammar= 'David's Basketball'

//console.log(myStringObject, myOtherStringObject);

//BOOLEAN object

var myBooleanTrue=false;//0
var myBooleanFalse=true;//1

//FLOAT object
var myFloatObject = 3.1;

//ARRAY object (identified with square brakets)

var myArrayObject=["red", 8, true, ["r", "b", "g"]];

console.log(myArrayObject[3]);

//OBJECT OBJECT (identified with curly brackets)
var myObjectObject = {
  make:"jeep",
  model:"wrangler",
  color:"black",
  year:2014,
  package:function(){
    alert(this.make);
  }
};

//console.log(myObjectObject);

//JAVASCRIPT MATH

var a = 5;
var b = 10;

var c =(a + b);

console.log(c);


var d = a - b;
var e = a * b;
var f = a / b;

console.log(d);
console.log(e);
console.log(f);

var g = b % a;
console.log(g);
