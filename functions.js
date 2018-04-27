function showSum(){
    var x = document.getElementById('xSUM').value;
    var y = document.getElementById('ySUM').value;
    if(isNaN(parseInt(x)) || isNaN(parseInt(y))){
  alert('Fill all the corresponging boxes please')
  }
  else {
    var res = parseInt(x)+parseInt(y);
    alert('The sum is '+ res);
  }
}
function showMult(){
    var x = document.getElementById('xMULT').value;
    var y = document.getElementById('yMULT').value;
    if(isNaN(parseInt(x)) || isNaN(parseInt(y))){
  alert('Fill all the corresponging boxes please')
  }
  else {

   var res = parseInt(x)*parseInt(y);
    alert('The multiplication is '+ res);
  }
}
function showDiv(){
    var x = document.getElementById('xDIV').value;
    var y = document.getElementById('yDIV').value;
    if(isNaN(parseInt(x)) || isNaN(parseInt(y))){
  alert('Fill all the corresponging boxes please')
  }
    else if(y > 0){
    var res = parseInt(x)/parseInt(y)
      alert('The division is '+ res);
  }
  else{
    alert('Choose a number greater than 0');
  }
}
function showSub(){
    var x = document.getElementById('xSUB').value;
    var y = document.getElementById('ySUB').value;
    if(isNaN(parseInt(x)) || isNaN(parseInt(y))){
  alert('Fill all the corresponging boxes please')
}else {

    var res = parseInt(x)-parseInt(y);
    alert('The substraction is '+ res);
  }
}
