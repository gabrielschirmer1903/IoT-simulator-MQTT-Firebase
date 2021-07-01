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

  var dados = ""
  var datahora = ""

  function timer() {
    var db = firebaseRef = firebase.database().ref('TempSensor').child('temperatura_atual')
    db.on('child_added',function(snapshot){
      var adicionado = snapshot.val();
      
      // console.log(adicionado)
      dados = adicionado;

      var var_lista = document.getElementById("var_lista");

      var_lista.value = adicionado;

      document.getElementById("var_lista").click();
    })
  }
  setInterval(timer , 100)


  var db = firebaseRef = firebase.database().ref('TempSensor/').child('log')
  db.on('child_added',function(snapshot){
    var variavel = snapshot.val();

    // console.log(variavel.Data[0].Day)
    // console.log(variavel.Data[0].Time)
    // console.log(variavel.Temperatura)

    datahora = "<tr><td>"+variavel.Data[0].Day+"</td>"+"<td>"+variavel.Data[0].Time+" segundos"+"<td>"+variavel.Temperatura+"<code>&deg;</code>"+"C"+"</td></tr>"+datahora;

    var datahoratemp = document.getElementById("datahoratemp");

    datahoratemp.innerHTML = datahora;
    
  })

  var countdown = FirabaseRef = firebase.database().ref('TempSensor/').child('log').on("value", function(snapshot) {
    var qntd = snapshot.numChildren();
    // console.log(snapshot.numChildren());

    qntade = qntd + " Vezes"; 

    var quantidadeLogs = document.getElementById("contagem");

    quantidadeLogs.innerHTML = qntade;

  })


