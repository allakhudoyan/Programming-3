var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var coords = [];

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000);
io.on('connection', function (socket) {
   for(var i in coords) {
     io.sockets.emit("display coords", messages[i]);
   }
   socket.on("send coords", function (data) {
       coords.push(data);
       io.sockets.emit("display coords", data);
   });
});