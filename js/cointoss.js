console.log("cointossjs")
var mybody = document.getElementById('mybody');
var result = "h"
var toss_confirm = document.getElementById('toss-confirm');
var counter = 1;
var confirm_toss = 0;
var result_list = "";
var result_confirm = "HEADS";
window.onbeforeunload = function() {
   return 'Do you really want to leave this page? Data will be lost!';
};
var toss_confirm_div = document.getElementById('toss-confirm-div')
function change_counter(event){

    var mybody = document.getElementById('mybody');
    console.log(event.keyCode)
    if (event.keyCode == 88){
      result = "h"
      confirm_toss = 1;
      toss_confirm_div.style="visibility: visible";
      }
    if(event.keyCode == 79){
        result = "t"
        confirm_toss = 1;
        toss_confirm_div.style = "visibility: visible";
    }
    if (event.keyCode == 13 & confirm_toss == 1){
        counter += 1;
        confirm_toss = 0;
        document.getElementById('toss-number').innerHTML = counter;
        document.getElementById('starting-position').innerHTML = result_confirm;
        document.getElementById('starting-position').style = "color:black; font-size: 33px"
        toss_confirm_div.style="visibility: hidden"
        result_list=result_list.concat(result)
        console.log(result)
        console.log(result_list)
      }
    if (event.keyCode == 8 & confirm_toss == 1){
        confirm_toss = 0;
        toss_confirm_div.style = "visibility: hidden"
    }
    if (event.keyCode ==32 & confirm_toss == 0){
        toss_error()
    }
    toss_confirmation()
    }
function toss_error(){
    console.log('TOSS ERROR!')
    document.getElementById('starting-position').innerHTML = "HEADS"
    document.getElementById('starting-position').style = "color:red; font-size:48px"
    result_list = result_list.concat('x');
    console.log(result_list)
}

function toss_confirmation(){
    if (result == "h"){
        result_confirm = "HEADS"
    }else if (result == "t"){
        result_confirm = "TAILS"
    }
    toss_confirm.innerHTML = "If the cointoss resulted in <u>"+result_confirm+"</u> press <strong>ENTER</strong>, if it was a mistake, press <strong>BACKSPACE <-</strong>!"
}
