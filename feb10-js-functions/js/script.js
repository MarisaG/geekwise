var str = "MArISa";
var modStr = str.substr(1,4);
// var userName = prompt('whats your name').trim();
// console.log(userName);

// console.log(str, modStr);

// .toLowerCase()- lower case string
// .toUpperCase()-uppercase string
// .substr() - get characters from starting index upto & including ending inex
// .trim() - removes excess spaces before and after
// . length -get total number of characters
// .charAt()  -get charceter aat specified iindex
//
// function askName(){
//   var wrName = prompt('whats ur name?').trim();
//
//   return wrName.trim();
// }
//
//
// var twoF = function(){
// var wrName = askName();
// var hellOne = wrName.charAt(0).toUpperCase();
// var littleP = wrName.substr(1, wrName.length - 1).toLowerCase();
// var modname = hellOne + littleP;
//
// // }();
//
// function alertYo(name){
//   alert(name);
// }

// var b = function(){
//   var u = a();
//   alert(u.charAt(0).toUpperCase() + u.substr(1).toLowerCase())
// }();
var extBtn = document.getElementById('external');
var content = doucument.getElementById('content');
var voidBtn = document.getElementById('void');

extBtn.addEventListener('click', function(){
  var userName = prompt('what is your name');
content.textContent = 'Marisa';
});

voidBtn.addEventListener('click',  function(){
content.textContent = "";
});



function changeColor(){
  // var randomNum = Math.random();
  // console.log(randomNum);
  // var randHue = ranNum + 360;
  // console.log(randHue);
  // var roundHue = Math.floor(randHue);
  // console.log(roundHue);
  // var addOne = roundHue + 1;
  // console.log(addOne);
  //
  document.body.style.backgroundColor = 'hsl('+ rand +', 50%, 50%)';
 var rand = Math.floor(Math.random() * 360) + 1;
  console.log(randNum);
  // document.body.style.backgroundColor = 'black';
}
