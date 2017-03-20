
// var car = {
//   make: 'jeep',
//   model: 'rangler',
//   color: 'pink',
//   year: 2077,
//   doors: 8
// };
//
//
// for(key in car){
//   // console.log(opts);
//   // console.log(car[opts]);
//   console.log(key + ":" + car[key]);
// };
const ROOT_URL = 'https://api.github.com/';
const CLIENT_ID = '';
const CLIENT_SECRET = '';

var main = document.querySelector('main'),
    img, h1, req, githubObj;



function getReq(){
   req = new XMLHttpRequest();
req.open('GET', ROOT_URL + 'users/marisag?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET);


  req.onload = function(){
      if(req.readyState === 4 && req.status === 200){
        console.log('success', req.statusText);
        githubObj = JSON.parse(req.responseText);
      }else{
        console.log('error', req.statusText);
      }


    // h1 = document.createElement('h1');
    // img = document.createElement('img');
    // console.log("DONE", req.readyState);
    // var githubObj = JSON.parse(req.responseText);
    // console.log(githubObj);
    // img.src = githubObj.avatar_url;
    // h1.textContent = githubObj.login;
    // main.append(img, h1);
  };
  req.send(null);

}

(function(){
  getReq();
  console.log(githubObj);
}())
