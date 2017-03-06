var modal = document.getElementById('modal');

// createModal('prompt', 'you cant click there');

function createModal(modalType, mobalMsg){
  modal.classList.add('active');
  var form = document.createElement('form');
  var modalMessage = document.createElement('p');
  var input = document.createElement('input');
  var modalDiv = document.createElement('div');
  var confirm = document.createElement('input');
  var modalCancel = document.createElement('input');

  modalMessage.textContent = mobalMsg;

  input.placeholder = "Your response";
  input.type = "text"


  confirm.type ="submit";
  confirm.value = " Confirm"


  modalCancel.type = 'button';
  modalCancel.value = 'cancel'


  form.append(modalMessage);
 if (modalType === 'prompt'){
    form.append(input);
    modalDiv.append(modalCancel)

  }else if(modalType === 'confirm'){
    form.append(modalCancel);
  }
  modalDiv.append(confirm)
  form.append(modalDiv);

  modal.append(form);

  modalCancel.addEventListener('click', function(){
    modal.removeChild(form);
    modal.classList.remove('active');

  });

  confirm.addEventListener('click', function(evt){
    evt.preventDefault();
    var userInput = input.value;
    modal.removeChild(form);
    modal.classList.remove('active')

    if(input.value){
      var userInput = input.value;
      console.log(userInput);
    }


  //   if(modalType === 'alert'){
  //    modal.removeChild(form);
  //    modal.classList.remove('active')
  //  }else if(modalType === "prompt"){
  //    console.log(userInput);
  //  }
  })



}
