var ul = document.createElement('ul');
//document.body.appendChild(ul);

var p = document.getElementsByTagName('p')[0];
// var parentDiv = p.parentNode;
document.body.insertBefore(ul, p);
var ulEl = document.getElementsByTagName('ul')[0];
var li;

var userNum= " ";
var getNum = function(){
  //console.log(arguments);
    if(!isNaN(parseInt(arguments[0])) && arguments[0] > 0){
      console.log("nice");
      userLoop(parseInt(arguments[0]));
    }
    else{
      console.log("bad");
      getUserNum();
    }
};

function userLoop(num){
  console.log(num);
  for(var i = 1; i < num + 1; i++){
    //console.log('user loop ' + i);
    todoItemGen(i);
  }
}

function todoItemGen(i){
  var li = document.createElement('li');
  ulEl.appendChild(li).textContent = i;
}
// var getUserNum = function(){
//   var userNum = prompt("pick a number");
//   getNum(userNum)
// }();



function getUserNum(){
  userNum = prompt("pick a number");
  getNum(userNum);
}

getUserNum();
