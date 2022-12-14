function save_data(participant_data, receiver) {
  var mydata = JSON.stringify(participant_data);
  xhr = new XMLHttpRequest();
  xhr.open('POST', receiver);
  xhr.setRequestHeader('Content-Type', 'application/json');
  //xhr.onload = function(){
    //if(xhr.responseText=="neptun_not_permitted"){
      //alert("Ezen a neptun kódon már elvégezték a feladatot! Az adataidat nem mentjük. Kérlek zárd be ezt az ablakot!");
    //};
  //}
  xhr.send(mydata);
  console.log("sent");
}
