let subtract = '-';
let add = '+';
let multi = '*';
let divide = '/';
let result = 0;
let display = '';
let text = document.getElementById('display');

function deleteLastCharacter() {
  text.value = text.value.substring(0, text.value.length - 1);
  document.getElementById('display').value = text.value;
}
function Number(value){
   display+=value;
   document.getElementById('display').value += value;
}
function Op(value){
   display = display + value;
   document.getElementById('display').value = '';
}
function Calcu2(){

 result = eval(display);
 console.log(display + '=' + result);
 document.getElementById('display').value = result;

}
function Clear(){
   document.getElementById('display').value = '';
   display = '';
}