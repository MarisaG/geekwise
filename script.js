var sky = document.querySelector('header'),
    input = document.querySelector('input[type="color"]'),
    btn = document.querySelector('input[type="submit"]'),
    bnnr = document.getElementById('banner'),
    banner = document.getElementById('bannerTwo')

    btn.addEventListener('click', function(e){
      e.preventDefault();
      var skyColor = input.value;
      var bnnrColor = input.value;
      var bannerColor = input.value;
      sky.style.backgroundColor = skyColor;
      bnnr.style.backgroundColor = bnnrColor;
      banner.style.backgroundColor = bannerColor

    });
