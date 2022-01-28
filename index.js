//-----------------------------------------------------------------
// Code by LukasL28 https://github.com/LukasL28
//-----------------------------------------------------------------
const fs = require('fs')
var express = require('express');
const cors = require('cors');
var app = express();
var server = require('http').createServer(app);

const webserver = function (port, hostdir) {

server.listen(port, function () {
console.log('Webserver läuft und hört auf Port %d', port);
});

app.use(express.static(hostdir));

fs.readdir(hostdir+'/images', (err, files) => {
    files.forEach(dateiname => {
        console.log('Server: Found--> '+dateiname)
      app.get('/img/'+dateiname, cors(), function (req, res) {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000")
        res.sendFile(hostdir+'/images/'+dateiname, cors())
    })
    });
  });

};

module.exports = {webserver};