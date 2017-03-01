// document.querySelector('button').addEventListener('click', function(){
//   // alert('plz help me');
//   // console.log(add(6,4,2));
//   console.log(addEx(1,2,7,3,32,'jol',34,40,20,) );
//
// })
//
// function add(num1, num2, num3){
//   return (num1 + num2) / num3;
//
// }
//
// var addEx = function(){
//   console.log(arguments);
//   var total = 0;
//   for(var i = 0; i < arguments.length; i++){
//     if(typeof arguments[i] !== 'string'){
//       total = arguments[i] + total;
//     }
//
//   }
//   return(total);
// };

console.log(firstName() + ' '  + lastName());

function firstName(){
  return "Marisa"
}

function lastName(){
  return "Gonzalez"
}

document.querySelector('input[type=submit]').addEventListener('click', function(e){
  getInfo();
  e.preventDefault();
});

var form = document.querySelector('form');

function getInfo(){
  console.log(
 'welcome ' + getName(form) + ' to your site Your email is ' + getEmail(form) + ' You signed up for the following subscriptions ' + getChecks(form)
   );
}

function getName(arr){
  var name = " ";
  for(var i = 0; i < form.length - 1; i++){
    if(arr.elements[i].type === 'text'){
      name += arr.elements[i].value
    }
  }
  return name
}

function getEmail(arr){
var emails = '';
  console.log(arr.elements);
  for(var i = 0; i < form.length - 1; i++){
    if(arr.elements[i].type === 'email'){
      emails = emails + arr.elements[i].value;
}
  }
  return emails;
    }

function getChecks(){
  var check = ' ';
  for(var i = 0; i < arr.elements.length - 1; i++){
    if(arr.elements[i].value = "checkbox" && arr.elements[i].checked){
      checks += arr.elemnts[i].value + '';
    }
  }
  return checks;
}
