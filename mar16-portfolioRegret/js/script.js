var nav = document.querySelector('nav'),
    nav1stLvl = document.querySelectorAll('nav > ul > li');


nav1stLvl.forEach(function(e,i){

e.addEventListener('mouseover', function(){
  this.classList.add('navBar');
});

e.addEventListener('mouseover', function(){
  this.classList.remove('navBar')
})

})
