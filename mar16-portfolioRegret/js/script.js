var nav = document.querySelector('nav'),
    logo = document.getElementById('logo');

nav.addEventListener('mouseover',function(){
  console.log(nav);
  nav.classList.remove('navBar')
})

nav.addEventListener('mouseout', function(){
  nav.classList.add('navBar')
})
