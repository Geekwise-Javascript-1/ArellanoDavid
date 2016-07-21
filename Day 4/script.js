// function helloWorld() {
//    console.log('Hello World');
// }
// helloWorld();


// function log(stuff) {
//    console.log(stuff);
// }
// log('the fox jumps over the lazy dog')


var name = "david";
name = capitalize(name);

function capitalize(str){
   return str[0].toUpperCase() + str.slice(1);
}
console.log(name);
