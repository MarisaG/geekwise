
const GITHUB_URL = "http://github.com/";
console.log(GITHUB_URL);

console.log('Notification' in window);

// if(!'Notification' in window){
//   console.log('not available');
// }else{
//   console.log('is available');
// }

var btn = document.querySelector('button');
console.log(btn);

if(!'childElementCount' in window){
  console.log('not here lol');
}else{
  console.log('ya got it gurl');
}

var hero = document.querySelector('header div');
var sec1 = document.querySelector('section:nth-of-type(1)');
var sec2 = document.querySelector('section:nth-of-type(2)');
var sec3 = document.querySelector('section:nth-of-type(3)')


var nav = document.querySelector('nav');
var dist = 0,
    navHeight = 0,
    heroHeight = 0;

window.addEventListener('scroll', function(evt){
dist = window.scrollY;
heroHeight = hero.clientHeight;
if(dist > heroHeight){
  secl.classList.add('vis')
}else{
  sec1.classList.remove('vis')
}
});

dist > heroHeight?
sec1.classList.add('vis'):
sec1.classList.remove('vis');
