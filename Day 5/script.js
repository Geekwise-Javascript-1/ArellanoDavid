// var toDo = prompt("What do you like to do?")
// while(toDo === ""){
//    alert("You need to input something here...");
//    toDo = prompt("What do you like to do?")
// }
// alert(toDo);


// function giveIt(){
//    var gotSomething = prompt('What do you like to do?');
//    if( !gotSomething){
//       alert('You must type something!!')
//       giveIt();
//    }else{
//       alert('its about time you did it. you said ' + gotSomething)
//    }
// }
//
// giveIt();


var fruits = ['cherry' , 'grapefruit', 'pomegranate', 'watermelon', 'pineapple'];
// var lastFruit = fruits.pop();

// var getFruit = fruits.slice(1, 3);
var getFruit = fruits.splice(1, 3, 'grapes', 'banana', 'durian');
console.log(getFruit);
console.log(fruits);

// fruits.push('apple');

// var fruitColors = [];
// var cherry = ['cherry', 'red'];
// var banana = ['banana', 'yellow'];
// var lime = ['lime', 'green'];
//
// fruitColors.push(cherry);
// fruitColors.push(banana);
// fruitColors.push(lime);
//
// console.log(fruitColors);
// console.log(fruitColors[0][1]) //finding the color inside the pushed array
// console.log(fruitColors[1][1]) // finding the color of second fruit
// console.log(fruitColors[2][1]) // finding the color of third fruit
