(function(){

getReq('/env.json', init);

}());


function init(data){
  const ROOT_URL = 'http://api.github.com/';
  const CLIENT_ID = data.github.CLIENT_ID;
  const CLIENT_SECRET = data.github.CLIENT_SECRET;

// var req = new XMLHttpRequest();
// req.open('GET', ROOT_URL+ 'users/marisag?client_id='+CLIENT_ID+ '&client_secret=' + CLIENT_SECRET );
// req.onload = function(){
//   if(req.readyState === 4 && req.status === 200){
//     githubObj(JSON.parse(req.responseText));
//   }else{
//     console.log('error', req.statusText);
//   }
// };
// req.send(null);
getReq(ROOT_URL+ 'users/marisag?client_id='+CLIENT_ID+ '&client_secret=' + CLIENT_SECRET );

var btn = document.querySelector('button');
btn.addEventListener('click', function(){
  // console.log(ROOT_URL + this.data, printEmojis);
  getReq(ROOT_URL + this.getAttribute('data-emoji'), princeEmojis);
})
};

function printEmojis(data){
  console.log(data);
  var ul = document.querySelector('ul'),
  li, img;
  for(emoji in data){
    li = document.createElement('li'),
    img = document.createElement('img');

    img.src = data[emoji];
    li.append(img);
    ul.append(li);
  }
}

function getReq(url, callback){
  var req = new XMLHttpRequest();
  req.open('GET', url);
  req.onload = function(){
    if(req.readyState === 4 && req.status === 200)
    {
      // callback(JSON.parse(req.responseText) );
    }else{
      console.log('error', req.statusText);
    }
  };
  req.send(null);
}

function githubObj(data){
  console.log(data);
    var main = document.querySelector('main'),
    img = document.createElement('img'),
    h1 = document.createElement('h1');

    img.src = data.avatar_url;
    h1.textContent = data.login;
    main.append(h1, img);
}
