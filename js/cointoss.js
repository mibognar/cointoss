console.log("cointossjs");
var result = "h"
var toss_confirm = document.getElementById('toss-confirm');
var instruction_sequence = 0;
var coin_type = ""
var counter = 1;
var experiment_started = 0;
var confirm_toss = 0;
var result_list = "";
var result_confirm = "HEADS";
var sequencenumber = 1
var neptun_code = ""
var participant_data = [];
var inform_version = 0
var information = ""

inform_version = Math.round(Math.random())
console.log(inform_version)
if (inform_version == 0){
  document.getElementById('consent-form').style = "display:bock";
  document.getElementById('consent-form2').style = "display:none";
  information = "HT"
}else{
  document.getElementById('consent-form').style = "display:none";
  document.getElementById('consent-form2').style = "display:block";
  information = "SS" 
}

window.onbeforeunload = function() {
   return 'Do you really want to leave this page? Data will be lost!';
};
var toss_confirm_div = document.getElementById('toss-confirm-div')

function consent(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  document.getElementById('consent-form').style = "display:none";
  document.getElementById('consent-form2').style = "display:none"; 
  document.getElementById('instructions-div').style = "display:block";
}

function instruction1(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  document.getElementById('instructions-div').style = "display:none";
  document.getElementById('instructions-div2').style = "display:block";
}

function instruction2(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  document.getElementById('instructions-div2').style = "display:none";
  document.getElementById('neptun').style = "display:block";
}
function neptun(){
  neptun_code = document.getElementById('neptun-code').value;
  console.log(neptun_code)
  console.log(coin_type)
  if (neptun_code !==""){
    document.getElementById('neptun').style = "display:none";
    document.getElementById('start-camera').style = "display:block";
    document.getElementById('sequencenumber').innerHTML = sequencenumber
  }else{
    document.getElementById('required').innerHTML = "You must fill out the form!"
  }
}

function start_sequence(){
  experiment_started = 1
  document.getElementById('start-camera').style = "display:none";
  document.getElementById('experiment-div').style = "display:block";
}

function next_sequence(){
  if (sequencenumber<7){
    document.getElementById('restart-camera').style = "display:none";
    document.getElementById('start-camera').style = "display:block";
  }else{
    document.getElementById('restart-camera').style = "display:none";
    document.getElementById('goodbye').style = "display:block"
  }
}

function change_counter(event){

    var mybody = document.getElementById('mybody');
    console.log(event.keyCode)
    if (event.keyCode == 88 & experiment_started == 1){
      result = "h"
      confirm_toss = 1;
      toss_confirm_div.style="visibility: visible";
      }
    if(event.keyCode == 79 & experiment_started == 1){
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
        if (counter>99){
          end_sequence()
        }
      }
    if (event.keyCode == 8 & confirm_toss == 1){
        confirm_toss = 0;
        toss_confirm_div.style = "visibility: hidden"
    }
    if (event.keyCode ==32 & confirm_toss == 0 & experiment_started == 1){
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

function end_sequence(){
  var currentData = {};
  currentData["neptun"] = neptun_code
  currentData["sequence_number"] = sequencenumber
  currentData["sequence"] = result_list
  currentData["info_version"] = information
  save_data(currentData, 'save.php')
  sequencenumber +=1
  experiment_started = 0
  counter = 1
  result_list = ""
  console.log('sequence_saved');
  console.log(sequencenumber)
  document.getElementById('toss-number').innerHTML = counter;
  document.getElementById('sequencenumber').innerHTML = sequencenumber-1
  document.getElementById('sequence').innerHTML = sequencenumber
  document.getElementById('uvaid').innerHTML = neptun_code + "_" + (sequencenumber-1)
  document.getElementById('experiment-div').style = "display: none"
  document.getElementById('restart-camera').style = "display: block"
}
