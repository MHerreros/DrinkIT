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

var pedido_actual = '';
var pedido;
var shots;
var pedido_anterior = [];
var ardStatus;
var frontMessage;
var frontLink;

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
  ardStatus = evento;
  if (ardStatus == 'done'){
    frontMessage = "DONE!";
    frontLink = '';
    pedido_actual = '';
  }
}

function executeDrink(pedido, shots, arduinoSerialPort){

  frontMessage = "Estamos preparando tu " + pedido;
  frontLink = "C:/Users/Carlos Tuma/Documents/Proyecto Final/ubb.gif";

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
  }
}



function requestHandler(pedido, shots, arduinoSerialPort){
  if (pedido_actual == ''){
    pedido_actual == pedido;
    if (ardStatus == 'full_tray'){
      executeDrink(pedido, shots, arduinoSerialPort);

    } else if (ardStatus == 'empty_tray'){
      frontMessage = "Por favor, colocá tu vaso sobre la plataforma";
      frontLink = '';
    }

  } else {
    response = "busy";
  }
  return response;
}

parser.on('data', arduinoHandler);

app.post('/drinks', function(req, res){
  pedido = req.body.trago;
  shots = req.body.shot;
  response = requestHandler(pedido, shots, arduinoSerialPort);
  res.json(response);
});

var counter = 10;
app.get('/info', function(req, res){
  if (pedido_actual == ''){
    frontMessage = "Pedí tu trago en la APP";
    frontLink = '';
  }
// if (frontMessage == "Por favor, colocá tu vaso sobre la plataforma") {
//     if (counter > 0){
//         var response_get = "Por favor, colocá tu vaso sobre la plataforma. Tiempo restante: " + counter + " seg";
//         counter = counter -1;
//         var link = "";
//     } else {
//       counter = 10;
//       pedido_actual = '';
//       var response_get = "Pedí tu trago en la APP";
//       var link = "";
//
//       }
//     } else {
//       counter = 10;
//       pedido_anterior = '';
//       pedido_actual = '';
//       var response_get = "Pedí tu trago en la APP";
//       var link = "";
//       }
//   }
//   else {
//     var response_get = "Pedí tu trago en la APP";
//     var link = "";
//   }
  res.json({text: frontMessage, link: frontLink});
}
);

app.listen(process.env.PORT || 8080);
console.log("App listening on port 8080")
