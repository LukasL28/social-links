//-----------------------------------------------------------------
// Code by LukasL28 https://github.com/LukasL28
//-----------------------------------------------------------------
const fs = require('fs')
var express = require('express');
const cors = require('cors');
var app = express();
var server = require('http').createServer(app);

const port = 4000;
const host_dir = "/web"

const webserver = function (port, host_dir) {

server.listen(port, function () {
console.log('Webserver läuft und hört auf Port %d', port);
});

app.use(express.static(host_dir));


};
