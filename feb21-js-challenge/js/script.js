/*
var btn = document.getElementById('btn');
var div = document.getElementsByTagName('div');
var classes = document.getElementsByClassName('list-four');

var lis = document.querySelectorAll('li:nth-of-type(odd)');
var ul = document.querySelector('ul');

console.log(lis);
// div.addEventListener('mouseover', function(){
//     alert("hovering over div")
// })
for(var a = 0; a < lis.length; a++){
  lis[a].style.backgroundColor = 'pink';
}

for(var i = 0; i < div.length; i++){
  div[i].addEventListener('mouseover', function(){
    alert("hovering the div");
  })
}
console.log(i);
for(var i = 0; i < classes.length; i++){
  classes[i].addEventListener('click', function(){
    alert("clicked on the list item")
  })
}
console.log(i);

btn.addEventListener('click', function(){
var nameA = prompt("whats ur name").trim();

if (nameA.trim() ===''){
  alert("you done give us blanks")
}
if(nameA.length >= 5){
alert("nice boi");
}else{
  alert("no boi");
}

// user.length >= 5 ? alert(user):alert("too short");

});
*/

var writeF = document.getElementById("writeF");
var subB = document.getElementById("subB");

subB.addEventListener('click', function(e){
  e.preventDefault();
  var userName = input.value;
  console.log(userName);

})
