//configuracion del servidor
const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const socket = require('socket.io')(http);

app.use(express.static(path.join(__dirname,'public')));

socket.on('connection',function(io){
    console.log("Conexion de un nuevo socket");
    io.on('nuevo mensaje',data=>{
        socket.emit('nuevo mensaje servidor', data);
        console.log('data: ',data);
    }); 
});

var port = process.env.PORT || 8080;


http.listen(port,()=>{
    console.log(" servidor escuchando en el puerto: 8080");
});  