console.log("cointossjs")
var mybody = document.getElementById('mybody');
//mybody.onkeypress=function(){change_counter(event)}
var counter = 1;

function change_counter(event){
  var mybody = document.getElementById('mybody');
    console.log(event.keyCode)
  if (event.keyCode == 88){
    counter += 1;
    document.getElementById('toss-number').innerHTML = counter;
    document.getElementById('starting-position').innerHTML = "HEADS"
  }
    if(event.keyCode == 79){
    counter += 1;
        document.getElementById('toss-number').innerHTML=counter;
        document.getElementById('starting-position').innerHTML = "TAILS"
    }
}
function toss_error(){
  document.getElementById('starting-position').innerHTML = "HEADS"
}
