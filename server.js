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

var arduinoCOMPort = "COM5";

var arduinoSerialPort = new SerialPort(arduinoCOMPort, {
 baudRate: 9600
});

const Readline = require('@serialport/parser-readline');
const parser = arduinoSerialPort.pipe(new Readline({ delimiter: '\n' }));

arduinoSerialPort.on('open',function() {
  console.log('Serial Port ' + arduinoCOMPort + ' is opened.');
});

parser.on('data', data =>{
  //console.log('Estado del pedido: ', data);
  //console.log(pedidos);
  pedidos = '';
});

app.post('/drinks', function(req, res){
  //console.log(req.body.trago);
  //console.log(req.body.shot);
  var pedido = req.body.trago;
  var shots = req.body.shot;
  //console.log(pedidos);

  if (pedidos == '') {
    pedidos = pedido;
    console.log(pedidos);
    if((pedido == 'Fernet') && (shots == 1)) {
        arduinoSerialPort.write("f"); //¿Se puede poner directamenta la variable "pedido" en vez de varios IF con los tragos?

    } else if ((pedido == 'Fernet') && (shots == 2)) {
        arduinoSerialPort.write("F");

    } else if ((pedido == 'Gin') && (shots == 1)) {
        arduinoSerialPort.write("g");

    } else if ((pedido == 'Gin') && (shots == 2)) {
        arduinoSerialPort.write("G");

    } else if ((pedido == 'Vodka') && (shots == 1)) {
        arduinoSerialPort.write("v");

    } else if ((pedido == 'Vodka') && (shots == 2)) {
        arduinoSerialPort.write("V");

    } else if ((pedido == 'Campari') && (shots == 1)) {
        arduinoSerialPort.write("c");

    } else if ((pedido == 'Campari') && (shots == 2)) {
        arduinoSerialPort.write("C");
    }

  } else {
      return res.json("busy");
  }
  console.log(pedidos);

  var response = "Estoy procesando el trago: " + pedido;
  res.json(response);
}
);


app.get('/info', function(req, res){

  if ((pedidos != "") && (pedido_anterior == "")){
    pedido_anterior = pedidos;
    var response_get = "Estamos preparando tu " + pedidos;
    var link = "C:/Users/Carlos Tuma/Documents/Proyecto Final/ubb.gif";

  } else if ((pedidos == "") && (pedido_anterior != "")){
    var response_get = "DONE!";
    var link = "";
    pedido_anterior = "";

  } else if ((pedidos != "") && (pedido_anterior != "")) {
    var response_get ="Estamos preparando tu " + pedido_anterior;
    var link = "C:/Users/Carlos Tuma/Documents/Proyecto Final/ubb.gif";
  }
  else {
    var response_get = "Pedí tu trago en la APP";
    var link = "";
  }
  res.json({text: response_get, link: link});
}
);

app.listen(process.env.PORT || 8080);
console.log("App listening on port 8080")
