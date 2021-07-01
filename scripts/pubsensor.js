var mqtt = require("mqtt");
var client = mqtt.connect("ws://18.117.135.87:9001");

      
function timer() {
  var temp = Math.floor(Math.random() * 100);
  const d = new Date();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var day = (d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear());
  var hour = (d.getHours()+':'+d.getMinutes()+' '+d.getSeconds());

  var payload = {
          "Temperature" : temp,
          "Date" : [{
                  "Day" : day,
                  "Time" : hour
          }]
  };

  client.publish(
    "mqtt/temp",
    JSON.stringify(payload)

  );
  console.log("Temperatura registrada: " + temp);
}

setInterval(timer, 5000);
