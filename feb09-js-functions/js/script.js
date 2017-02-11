//IIFE -Immedediately Invoked Function Expression
//(function(){


  //Function Declaration
  function funcDec(usermessage, userAge){
  // alert("this is from the declaration");
  console.log(usermessage, userAge);


  }
  //PARAMETER & ARGUEMENT
  funcDec("hello", 9);
  //funcDec(); //calling (invoking (running)) the function


  var myNum; //undefined variable

  //Function Expression
  var funcExp = function(){
     myNum = 7;
    //funcDec();
  // alert("this is from the expression")
  }; //immediately invoke the function with ()


  //funcExp();//calling (aka invoking, aka running)the function

  //HOISTING - places all function DECLARATION and variable names into memory before running scripts

 // SCOPE - a variable that exists only within the function where it was created

 //RETURN

 function getFullName(a, b){
  return a + ' ' + b;
 }

 console.log( getFullName('Marisa', 'Gonzalez') );

function oneRec(){
var userName = prompt("Whats your name?");
var sentc = "Welcome" + userName + "to my website";

return sentc;

}



function twoRec(){

alert(oneRec())

}

twoRec()



// }());
