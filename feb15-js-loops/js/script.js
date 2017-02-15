var myArr = [ 'red', 'orange', 'yellow'];
var newArray = [];
// push pop shift unshift

var add = document.getElementById('add');
var remove = document.getElementById('remove')

add.addEventListener('click', function(){
// alert('help cry sad ');
askColor();
});

remove.addEventListener('click', function(){
// alert('toasty goodness')
// var re = /ab+c/;
// console.log(re);
//
// var myRe = /d(b+)d/g;
// var myArray = myRe.exec('cdbbdbsbz');
// console.log(myArray);

});

function askColor(){
  var userColor = prompt('whats yo fav colour gurl?');
  if (userColor !== null && userColor.trim() !== ''){
    var userColorCheck = userColor.toLowerCase().trim();
if(!isNaN(parseInt(userColorCheck))){
  askColor()
}else if (userColor === '') {
  askColor();
}else{
  // alert('you chose a color! huzzah!')
  newArray.push(userColorCheck);
  console.log(newArray);
}

  }else{
    alert('Well fine then. Go.');
  }

//  || === or
// && == and



//   if(!isNaN(parseInt(userColor)) ){
// alert("lol");
//   }else {
//     alert("lol u tried")
//   }


  // null
  // blank (empty space)
  //string

  // isNaN( ) to eliminate numbers
}
