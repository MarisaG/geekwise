var btn = document.getElementById("btn");
var movArray = [];

btn.addEventListener("click", ask);


function ask ( btn){
  movArray.push(prompt("WHats yo fav movie?"));

  if(movArray.length >= 3){
    console.log(movArray);
  }
  if(movArray.length >= 5){
    // for( i = 0; i < movArray.length; i++){
    //    console.log(movArray[i]);
    // }

    movArray.forEach(function(el, idx){
      console.log(idx + ":" + el);
      // console.log(movArray[i]);
    })

  }

}
