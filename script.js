var sky = document.querySelector('header'),
    input = document.querySelector('input[type="color"]'),
    btn = document.querySelector('input[type="submit"]'),
    bnnr = document.querySelectorAll('.banner')

    btn.addEventListener('click', function(e){
      e.preventDefault();
      var skyColor = input.value;
      sky.style.backgroundColor = skyColor;
      bnnr.style.backgroundColor = skyColor

    });
