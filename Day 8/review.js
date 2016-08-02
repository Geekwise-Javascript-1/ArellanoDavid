function num2arr(num1, num2){
   return [num1+num2, num1*num2];
}
//console.log( num2arr(5, 10) );

// function numCompare(num1, num2){
//    if(num1 > num2){
//       return 'larger';
//    }else if(num1 < num2){
//       return 'smaller';
//    }else{
//       return 'equal';
//    }
// }
//console.log( numCompare(10, 10) );

// function capitalize(target){
//    if(target[0].toUpperCase() == target[0]){
//       return 'true';
//    }else if(target[0].toLowerCase() == target[0]){
//       return 'false';
//    }else{
//       return 'not a letter';
//    }
// }
// console.log(capitalize(a));



// function str2arr(){
//    var arr = [];
//    var getStr = prompt('give a word');
//    for(var i = 0; i <getStr.length; i++){
//       arr.push( getStr[i] );
//    }
//    return arr;
// }
// console.log( str2arr() );

function fizzbuzz(){
   for(var i=1; i<=100; i++){
      if(i % 15 == 0){
         console.log('fizzbuzz');
      }else if(i % 3 == 0){
         console.log('fizz');
      }else if(i % 5 == 0){
         console.log('buzz')
      }else{
         console.log(i);
      }
   }
}
console.log( fizzbuzz() );
