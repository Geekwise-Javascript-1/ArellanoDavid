// var btn = document.createElement('button');
// btn.textContent = "Click Me.";
// //console.log(btn)
//
// document.body.appendChild(btn)
//
// btn.id = "button"
//
// btn.onClick = promptBtn
//
// function promptBtn(){
//    var getStuff = prompt('Please give a number.')
// }
//
// console.log(promptBtn)


var btn = document.createElement('button');
btn.textContent = 'Click Me.';
document.body.appendChild(btn);

btn.onclick = getNum

function getNum(){
   var msg = prompt('Please give a Phone Number');
   console.log(msg)
}
