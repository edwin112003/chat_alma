var socket = io();
const enviar = document.getElementById('enviar');

enviar.addEventListener('click', ()=>{
    console.log("aber");
    var mensaje = document.getElementById('mensaje');
    console.log(mensaje.value);
    var  objMss = {
        mensaje : mensaje.value,
    }
    if(mensaje.value != ''){
        socket.emit('nuevo mensaje', objMss);
        mensaje.value = '';
    }else{
        alert('mensjae vacio');
    }

});
socket.on('nuevo mensaje servidor', data => {
    var lista_mensajes = document.getElementById('hol');
    var html = data.mensaje;
    var div = document.createElement("div");
    div.innerHTML = html;
    lista_mensajes.appendChild(div);
});