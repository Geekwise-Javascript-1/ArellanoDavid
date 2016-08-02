// var btn = document.querySelector('button');
//
// btn.addEventListener('click', function(){
//    alert(btn.dataset.response);
// });


var btn = document.querySelectorAll('button');
var a = document.querySelector('a');

for(var i = 0; i < btn.length; i++){

   btn[i].addEventListener('click', function(){
      //alert(this.dataset.response);
      document.body.style.backgroundColor = this.id;
});
   // btn[i].addEventListener('mouseover', function(){
   //    this.style.color = 'magenta';
   // });
   // btn[i].addEventListener('mouseout', function(){
   //    this.style.color = 'black';
   // })
}

a.addEventListener('click', removeColor);
function changeColor(){
   document.body.style.backgroundColor = this.id;
}
function removeColor(){
   var ranNum = Math.floor( (Math.random() * 3));
   console.log(ranNum)
   btn[ranNum].removeEventListener('click', changeColor);
}
