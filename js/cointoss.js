console.log("cointossjs")
var mybody = document.getElementsByTagName('body');
//mybody.onkeypress=function(){change_counter(event)}
var counterx = 0;
var countero = 0;
function change_counter(event){
    console.log(event.keyCode)
  if (event.keyCode == 88){
    counterx += 1;
    document.getElementById('coincounterx').innerHTML = counterx;
  }
    if(event.keyCode == 79){
    countero += 1;
        document.getElementById('coincountero').innerHTML=countero;
    }
}
