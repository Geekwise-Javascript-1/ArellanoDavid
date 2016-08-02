var myCar = {
   make: 'Ford',
   model: 'Ranger',
   year: 1998,
   color: 'Black'
};

var me = {
   name: 'David',
   sayName: function(){
      alert(this.name);
   }
}




// var fruits = ['apples', 'grapes', 'pears'];
//
// function displayFruit(){
//    console.log(fruits);
// }
//
// function addFruit(fruit){
//    fruits.push(fruit);
//    displayFruit();
// }
//
// function changeFruit(position, value){
//    fruits[position] = value;
//    displayFruit();
// }
//
// function deleteFruit(position){
//    fruits.splice(position, 1);
//    displayFruit();
// }


var fruitList = {
   fruits: ['apples', 'kiwi', 'bananas'],
   displayFruit: function(){
      console.log(this.fruits);
   },
   addFruit: function(fruit){
      this.fruits.push(fruit);
      this.displayFruit();
   },
   changeFruit: function(position, value){
      this.fruits[position] = value;
      this.displayFruit();
   },
   deleteFruit: function(position){
      this.fruits.splice(position, 1);
      this.displayFruit();
   }
};
