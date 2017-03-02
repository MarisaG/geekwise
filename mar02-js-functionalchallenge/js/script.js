var content = document.getElementById('content');
var p = document.createElement('p');

var h1 = document.createElement('h1');
content.appendChild(h1).textContent = "One small step for man, one giant leap for mankind.";

var p = document.createElement('p');
content.appendChild(p).textContent = "TAKE ME TOO THE VOID NIEL ARMSTRONG!!!!!!PLEASE IM BEGGING YOU. ALSO, ARE ALIENS REAL?? NASA?? ";

var a = document.createElement('a');
content.appendChild(a).textContent = "mi Amigo"
a.id = 'test';
a.href = 'http://google.com';
a.className = 'test2';
a.target = "_blank";

var ul = document.createElement('ul');
content.appendChild(ul);
content.insertBefore(ul, a);

var form = document.createElement('form');
var userName = document.createElement('input');
var lastName = document.createElement('input');
var email = document.createElement('input');
var password = document.createElement('input');
var number = document.createElement('input')
var submitBtn = document.createElement('input');
var br = document.createElement('br');

userName.type = "text";
userName.placeholder = "enter yo name";
lastName.type= "text";
lastName.placeholder = "Last Name";
email.type = "email";
email.placeholder="email";
password.type="password";
password.placeholder = "password";
number.type = "number";
number.placeholder = "number";
submitBtn.type = "submit";
submitBtn.value = "accept";
form.appendChild(userName);
form.appendChild(lastName);
form.appendChild(email);
form.appendChild(password);
form.appendChild(number);
form.appendChild(br);
form.appendChild(submitBtn);
content.insertBefore(form, a);

submitBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  getValues();
  // ask();
});

// function ask(){
//   console.log(userName.value);
//   userName.value = " ";
// };
//

number.addEventListener('change', function(evt){
  evt.preventDefault();
  console.log(evt.target.value);
  if(evt.target.value < 0){
    evt.target.value = 0;

  }else{

  }
});

var formArr = [];
function getValues(){
  ul.innerHTML = '';
  // console.log(form.elements[4].value);
   var loopNum = parseInt(number.value);
   for(var i = 0; i < loopNum; i ++){
     var li = document.createElement('li');
     ul.appendChild(li).textContent = i;
     li.contentEditable = true;
   }

  // for(var i = 0; i < form.elements.length- 1; i++){
  //   formArr.push(form.elements[i].value);
  //
  // }
  // console.log(formArr);
}
