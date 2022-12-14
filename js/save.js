function save_data(participant_data, receiver) {
  var mydata = JSON.stringify(participant_data);
  xhr = new XMLHttpRequest();
  xhr.open('POST', receiver);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.send(mydata);
  console.log("sent");
}
