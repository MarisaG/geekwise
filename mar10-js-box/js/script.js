var winH = document.querySelector('#content li:nth-child(1) span'),
    winW = document.querySelector('#content li:nth-child(2) span'),
    div = document.getElementById('content'),
    form = document.createElement('form'),
    color = document.createElement('input');



 form.append(color)

  var winWidth = window.innerWidth,
      winHeight = window.innerHeight;

      winW.textContent = window.innerWidth;
      winH.textContent = window.innerHeight

      window.addEventListener('resize', function(){
        winWidth = window.innerWidth,
        winHieght = window.innerHeight;

        winW.textContent = window.innerWidth;
        winH.textContent = window.innerHeight

      });
