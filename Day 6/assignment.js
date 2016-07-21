var btn = document.getElementById('btn'),
   input1 = document.getElementById('input1'),
   input2 = document.getElementById('input2'),
   span = document.getElementById('span');

btn.onclick = handleGoBtnClick;

function handleGoBtnClick(){
   //var userInput = input1.value;
   //console.log(typeof input1.value);
   var val1 = input1.value;
      val2 = input2.value;
   if(val1 === "" || val2 === ""){
      console.log('its blank')
      return '';
   }
   input1.value = 'Hello Javascript!'
   alert(val1);
   span.innerHTML = input2.value;
   //updateOutput(input2.value);
}



// GIVE 5 INPUTS
//GO BUTTON
// ONCLICK GRAB VALUES OF 5 INPUTS
// PUSH INTO AN ARRAY
// PUT INTO AN ARRAY (USE FOR LOOP)
// CHECK FOR DUPLICATES
