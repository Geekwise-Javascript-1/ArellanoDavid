
var a = document.createElement('a');
a.textContent = "I'm a link to Google";
a.href = "http://www.google.com"


//console.log(a)

document.body.appendChild(a);

setTimeout(function(){
   document.body.removeChild(a)
}, 2000);

a.setAttribute('style', 'background-color: red; color: white');
// a.style.backgroundColor = 'green'; // ANOTHER WAY TO STYLE


var h1 = document.querySelector('h1');
var anchor = document.createElement('a');
anchor.textContent = 'click here';
anchor.href = 'http://www.apple.com';
anchor.target = '_blank';

//h1.appendChild(anchor);
