var box = document.getElementById('display');
var calcField='';
function toScreen(x) {
  box.value+=x;
  if (x==='c') {
    box.value='';
    calcField='';
  }
  else {
    calcField+=x;
    box.value=calcField;
  }
}
function answer() {
  x=box.value;
  x=eval(x);
  box.value=x;
}
function power() {
  x=box.value;
  x=eval(x*x);
  box.value=x;
}

function backspace(){
  calcField=calcField.slice(0,calcField.length-1);
  box.value=calcField;
}