
var add = document.getElementById('add');
var remove = document.getElementById('remove');
var userNameArray =[];
var moviesArray = ['Mulan', 'IronMan', 'Brave', 'RobinHood', 'CandyMan'];
for(var i = 0; i < moviesArray.length; i++){
  console.log(moviesArray[i]);
}

add.addEventListener('click', askName);
// add.addEventListener('click', function(){
//   // alert('life is death');
//   askName('remove');
//
// });

remove.addEventListener('click', function(){
  alert('death');
});

function populateArray(un){
userNameArray.push(un);
console.log(userNameArray);
if(userNameArray.length >= 5){
  outputArrray();
  }
}

function outputArrray(){
  userNameArray.forEach(function(el,idx){
    console.log(idx + ':' + el);
  });

  // FOR LOOP
  // for( var i = 0; i < userNameArray.length; i = i++){
  //   console.log(userNameArray[i]);
  // }
}

function movsArray(){
  moviesArray.forEach(function(e, i){
    console.log(i + ':' + e);
  });
}
movsArray()

function askName(add){
  var urName = prompt('Whats yo name');
  if(urName === null){
    alert('please enter your username');
    return;
  }
  var userNameParsed = parseInt(urName);
  var userNameNaN = isNaN(userNameParsed);
  var userNameBlank = urName.trim() === '';
  // console.log('original:' + urName);
  // console.log('parsed:' + userNameParsed);
  // console.log('is it NaN:' + userNameNaN);
  // console.log('is it blank:' + userNameBlank);

  if(
    // urName !== null &&
    userNameNaN === false &&
    userNameBlank === false ||
    userNameNaN === true &&
    userNameBlank === true
){
  alert('you entered bad info');
}else{
  // alert('you may continue');
  populateArray(urName)
}
}
