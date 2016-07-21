// var square = function(number) {
//    return number * number
// };
// var x = square(prompt('Give me a number'));
//    if(!x){
//       alert("I need a number... please try again...");
//       var x = square(prompt('Give me a number'));
//       }
// console.log(x)



// var name = prompt('give me a name');
// name = doStuff(name);
// function doStuff(name){
//    return name[0].toUpperCase() + name +'.'
// };
//
// console.log(name);

//CHALLENGE 1
var getNum = parseInt(prompt('give me a number') );
function secondPower(num1){
   //alert('num1');
   if(!num1){
      return NaN;
   }
   return num1 * num1;
}
// alert( secondPower(getNum) );


//CHALLENGE 2
var getStr = prompt('type a sentence');
var res = capPeriodStr(getStr);

function capPeriodStr(str){
   var upped = str.charAt(0).toUpperCase() + str.slice(1);
   var lastChar = upped.length - 1;
   //console.log(str[lastChar]);
   if(lastChar !== '.'){
      return upped + '.'
   }
   return upped;
}
//alert(res);


//CHALLENGE 3
var getStr = prompt('type a sentence 2');
var flipped = flipThatStr(getStr);

function flipThatStr(str){
   if(!str){
      return '';
   }else if(str.length % 2 !== 0){
      var calc = Math.ceil(str.length / 2);
      var firstHalf = str.substring(0, str.length/2)
      var secondHalf = str.substring(calc);
      return secondHalf + firstHalf;
   }else{
      var firstHalf = str.substring(0, str.length/2)
      var secondHalf = str.substring(str.length/2);

      return secondHalf + firstHalf;
   }
}


alert(flipped);
