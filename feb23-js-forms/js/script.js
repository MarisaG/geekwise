// var a = doument.getElementById('');
// var b = document.getElementByClassName();
// var c = doument.getElementByTagName();
// var d = document.querySelector();
// var e = document.querySelectorAll();
//

var form = document.querySelector('form#contactForm');
var subBtn = document.querySelector('#contactForm input[type="submit"]')
var userArr = [];
custom = document.querySelector('.custom');


var username = "";

if(localStorage.getItem('username')){
    username = localStorage.getItem('username');
    alert(username + ' pleae enter ur password to continue');
    password();

}else{
  alert('Please log in');
  login();
}


subBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  for(var i = 0; i < form.elements.length - 1; i++){
    if(form.elements[i].type !== 'checkbox'){
      userArr.push(form.elements[i].value);
    }
    if(form.elements[i].type === 'checkbox' &&
       form.elements[i].checked){
         userArr.push(true);
       }
  }
  console.log(userArr);
});


function login(){
var loginBtn = document.querySelector('#loginForm input[type="submit"]');
var logArr = [];

loginBtn.addEventListener('click', function(evt){
    evt.preventDefault();

    var pass = MD5('Marisa Gonzalez');
    console.log(pass);

    for(var i = 0; i < loginForm.elements.length - 1; i ++){
      //logArr.push(MD5(loginForm.elements[i].value));
      if(loginForm.elements[i].type === 'text'){
        localStorage.setItem('username', loginForm.elements[i].value);
      }
      else{
        sessionStorage.setItem('password', MD5(loginForm.elements[i].value))
      }
      // if(loginForm.elements[i].type === 'password'){
      //   sessionStorage.setItem('password', loginForm.elements[i].value);
      // }
      // if(loginForm.elements[i].type !== 'password'){
      //   logArr.push(loginForm.elements[i].value);
      // }
      // else{
      //   logArr.push(loginForm.elements[i].value)
      // }

      //faster way of typin it
      // loginForm.elements[i].type === 'text' ?
      //   localStorage.setItem('username', loginForm.elements[i].value) :
      //   sessionStorage.setItem('password', MD5(loginForm.elements[i].value));
    }
    custom.textContent = 'hello ' + localStorage.getItem('username');
      for(var i = 0; i < contactForm.length; i ++){
        contactForm.elements[i].disabled = false;
      }

  }
// console.log(logArr);
// localStorage.setItem('creds', logArr);
});

}

function password(){
  loginBtn.addEventListener('click', function(evt){
    evt.preventDefault();

    if(Md5(loginForm elements[i].value) === sessionStorage.getItem('password')){
      alert('Passwords match. You may continue')

    }
  })
}

// .setItem('key', 'value');
// .getItem('key');
// .removeItem('key');
// clear();
