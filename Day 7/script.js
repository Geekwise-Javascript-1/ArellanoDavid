function foo(){
   var a = "inside function foo";
   return a;
}

//console.log(a)  // DID NOT WORK
//console.log( foo() ); // DID WORK

var name = 'david';
function capitalize(){
   return name[0].toUpperCase() + name.slice(1);
}

var capitalizedName = capitalize();
// console.log(capitalizedName);

var capitalize = function capitalize(str){
   return str[0].toUpperCase() + str.slice(1);
}

//console.log(capitalize('arellano'));




// logName('David');
function logName(name){
   console.log(name)
}

// logAgain('David')

var logAgain = function(name){
   console.log(name)
}



var name = "Adam";

function alertName(){
   alert(name);

   var name = "Eve";
   alert(name);
}

// alertName(); LOGS UNDEFINED THEN Eve



var h1 = document.getElementById('h1');
var hasClass = h1.hasAttribute('class');
h1.setAttribute('rel', 'whatever');
//console.log(h1);

h1.removeAttribute('rel');
//console.log(h1);



var anchors = document.querySelectorAll('ul li a');
console.log(anchors.length);
for(i = 0; i < anchor.length; i++){
   var anchor = anchors[i];
}
