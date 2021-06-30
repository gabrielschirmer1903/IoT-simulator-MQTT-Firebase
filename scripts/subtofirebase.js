var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
var id = 0
var firebaseConfig = {
  apiKey: "AIzaSyBNJ_HUgAGWQCPFsXwqeGst8imxhTaeCXU",
  authDomain: "sd2021-t5.firebaseapp.com",
  databaseURL: "https://sd2021-t5-default-rtdb.firebaseio.com",
  projectId: "sd2021-t5",
  storageBucket: "sd2021-t5.appspot.com",
  messagingSenderId: "433625604326",
  appId: "1:433625604326:web:4deae80a089f5ae5f55b27"
};
firebase.initializeApp(firebaseConfig);

var mqtt = require("mqtt");
var client = mqtt.connect("ws://brokerip");

client.subscribe("mqtt/temp")
client.on("message", function (topic, payload) {

  var data = JSON.parse(payload.toString())
  id++
  var timestamp = new Date().getTime();

  console.log(data.Temperature)

  firebase.database().ref('TempSensor/').child('temperatura_atual/').set({
    Temperatura: data.Temperature
  });

  firebase.database().ref('TempSensor/').child('log/' + id).set({
    Temperatura: data.Temperature,
    Data: data.Date
  });
})

