var content = document.getElementById('content');


var h1 = document.createElement('h1'),
    p = document.createElement('p'),
    text = document.createTextNode('explictly creating a text node'),
    a = document.createElement('a'),
    modalForm = document.createElement('form'),
    modalask = document.createElement('input');
    modalSubmit = document.createElement('input'),
    modalCancel = document.createElement('input')


    modalSubmit.type = 'button';
    modalSubmit.value = 'Yo!';
    modalCancel.type = 'button';
    modalCancel.value = 'No!';

    // content.append(modalForm);
    // content.append(modalSubmit);
    // content.append(modalCancel);
    // content.append(modalask);

function help(){
  if(content === 'alert'){
    content.append(modalSubmit);
  }
}


h1.textContent = "I want to Believe"
p.textContent = "What really happpened on tht fateful day in Roswell, New Mexico in 1947??";
a.textContent = "click";


// content.append(h1, p, text,' here is a text node ',a);

// content.appendChild(h1);

var form = document.querySelector('form');
// console.log('Notification' in window);
// if(!('Notification' in window) ){
//   alert('sorry, that feature is not available')
// }else{
//   console.log('Notifications are avaliable');
// }
  // form.children.forEach(function(e,i){
  //   console.log(e);
  // });

// for(i = 0; i < form.children.length; i++){
//   console.log(form.children[i]);
// }
//
//   console.log(form);

console.log('childElementCount' in form);

  if('childElementCount' in form){
    for(var i = 0; i < form.children.length; i++){
      console.log(form.children[i]);
    }
    }else{
      for(var i = 0; i < form.childElementCount; i ++){
        console.log(form.children[i]);
    }
  }
console.log(form);

var formArr = [];
  formArr.push(form.nodeType);
  formArr.push(form.clientHeight);
  formArr.push(form.nextSibling )

console.log(formArr);
