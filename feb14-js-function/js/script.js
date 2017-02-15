// var foot = function(){
// var username = prompt("help me batman").trim();
// console.log(username);
// // return ask;
// boot(user)
// }();
//
// function boot(user){
// var cry = user.charAt(0).toUpperCase() + user.substr(1).toLowerCase()
// alert(user);
//
//
// }
//
// function alert(user){
//   alert(user)
// }

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var content = document.getElementById('content');

btn1.addEventListener('click', function(){
userFirstName = prompt('whats your first name?');
// console.log(typeof parseInt(userFirstName));
if(isNaN(userFirstName)){
  btn2.disabled = false;
  btn1.disabled = true;
}else{
  alert('please type your name')
}

});

btn2.addEventListener('click', function(){
var userLastName = prompt('whats your last name?');
// userLastName is SCOPED to this function, not accessable globally
// alert(userFirstName + " " + userLastName)
div.textContent = userFirstName + " " + userLastName;
btn1.disabled = false;
btn2.disabled = true;
})
