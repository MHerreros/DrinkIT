var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');
var SerialPort = require("serialport");
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

var pedidos = [];
var pedido_anterior = [];
var ardMsge;
var done = false;

var arduinoCOMPort = "COM5";

var arduinoSerialPort = new SerialPort(arduinoCOMPort, {
 baudRate: 9600
});

const Readline = require('@serialport/parser-readline');
const parser = arduinoSerialPort.pipe(new Readline({ delimiter: '\r\n' }));

arduinoSerialPort.on('open',function() {
  console.log('Serial Port ' + arduinoCOMPort + ' is opened.');
});

function arduinoHandler(evento){
  ardMsge = evento;
  if (ardMsge == 'done'){
    done = true;
  }
  if ((done == true) && (ardMsge == 'empty_tray')){
    done = false;
    pedidos = '';
  }
}
parser.on('data', arduinoHandler);

app.post('/drinks', function(req, res){

  var pedido = req.body.trago;
  var shots = req.body.shot;
  if (ardMsge != 'empty_tray'){
    if ((pedidos == '') && (done == false)){
      pedidos = pedido;

        if((pedido == 'Lemon Drop') && (shots == 1)) {
          arduinoSerialPort.write("l"); //¿Se puede poner directamenta la variable "pedido" en vez de varios IF con los tragos?

        } else if ((pedido == 'Lemon Drop') && (shots == 2)) {
          arduinoSerialPort.write("L");

        } else if ((pedido == 'Destornillador') && (shots == 1)) {
          arduinoSerialPort.write("d");

        } else if ((pedido == 'Destornillador') && (shots == 2)) {
          arduinoSerialPort.write("D");

        } else if ((pedido == 'Campari Orange') && (shots == 1)) {
          arduinoSerialPort.write("c");

        } else if ((pedido == 'Campari Orange') && (shots == 2)) {
          arduinoSerialPort.write("C");

        } else if ((pedido == 'Mutticano') && (shots == 1)) {
          arduinoSerialPort.write("m");

        } else if ((pedido == 'Mutticano') && (shots == 2)) {
          arduinoSerialPort.write("M");

        } else if ((pedido == 'Limpieza')) {
          arduinoSerialPort.write("Z");
          var response = "cleaning";
          res.json(response);
        }

    } else {
        return res.json("busy");
    }
    console.log(pedidos);
    var response = "inProgress";
  } else {
    var response = "empty";
  }
    res.json(response);
}
);

var counter = 10;
app.get('/info', function(req, res){
  if (pedidos != "Limpieza"){
    if ((pedidos != "") && (pedido_anterior == "")){
      pedido_anterior = pedidos;
      if (ardMsge == 'empty_tray'){
        var response_get = "Por favor, colocá tu vaso sobre la plataforma";
        var link = "";
      } else {
        var response_get = "Estamos preparando tu " + pedidos;
        var link = "C:/Users/Carlos Tuma/Documents/Proyecto Final/ubb.gif";
      }

    } else if ((pedidos == "") && (pedido_anterior != "")){
      var response_get = "DONE!";
      var link = "";
      pedido_anterior = "";

    } else if ((pedidos != "") && (pedido_anterior != "")){
        if (done == false){
          if (counter > 0){
            if ((ardMsge == 'empty_tray') ){
              var response_get = "Por favor, colocá tu vaso sobre la plataforma. Tiempo restante: " + counter + " seg";
              counter = counter - 1;
              var link = "";
            } else {
              counter = 10;
              var response_get = "Estamos preparando tu " + pedido_anterior;
              var link = "C:/Users/Carlos Tuma/Documents/Proyecto Final/ubb.gif";
            }
          } else {
            counter = 10;
            pedido_anterior = '';
            pedidos = '';
            var response_get = "Pedí tu trago en la APP";
            var link = "";
          }
        } else {
          var response_get = "Tu pedido esta listo! Retiralo de la plataforma";
          var link = "";
        }
    }
    else {
      var response_get = "Pedí tu trago en la APP";
      var link = "";
    }
  } else {
    if (done == false){
      if (counter > 0){
        if ((ardMsge == 'empty_tray') ){
          var response_get = "Por favor, colocá tu vaso sobre la plataforma. Tiempo restante: " + counter + " seg";
          counter = counter - 1;
          var link = "";
        } else {
          counter = 10;
          var response_get = "Limpieza en progreso. Aguarde unos instantes";
          var link = "C:/Users/Carlos Tuma/Documents/Proyecto Final/ubb.gif";
        }
      } else {
        counter = 10;
        pedido_anterior = '';
        pedidos = '';
        var response_get = "Pedí tu trago en la APP";
        var link = "";
      }
    } else {
      var response_get = "La limpieza está terminada. Retirá el recipiente de la plataforma";
      var link = "";
    }
  }
  res.json({text: response_get, link: link});
});

app.listen(process.env.PORT || 8080);
console.log("App listening on port 8080")
