(function(){ //IIFE-immediately invoked function excecutable

// var userName = prompt("What r name");
// var num1 = parseInt(prompt("pick a number"));
// var num2 = parseInt(prompt("piack another number"));

//function Deceration
function funDec(a, b, c){
  alert(a + (b + c) );
}

// funDec(userName, num1, num2);

// var carObj = {
//   make:"Pizza",
//   model:"car",
//   color:"pink",
// }
//
// function myModel(carObj){
//   alert(carObj.model);
// }
//
// myModel(carObj);

//function executable
// var funcEx = function(){
// alert(arguments[0]);
//
// }('marisa',7);


var oneArray = ["aley", "vid", "eri", "vanesaa", "resa"];
var twoArray = [ "cheerios", "cookie krisp", "captain crunsh", "toast crunch", "rasian brand"]
twoArray.sort();
oneArray.sort();

var randName   =oneArray[Math.floor(Math.random()*oneArray.length)];
var randCeral = twoArray[Math.ceil(Math.random()*twoArray.length)];


var funex = function(){
alert(arguments[1]+ " " + arguments[0]);
}(randName, randCeral);

funex()

})();
