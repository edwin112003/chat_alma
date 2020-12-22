var socket = io();
const enviar = document.getElementById('enviar');

enviar.addEventListener('click', ()=>{
    var mensaje = document.getElementById('mensaje');
    var persona = document.getElementById('name');
    console.log(mensaje.value);
    console.log(persona.value);
    var  objMss = {
        mensaje : mensaje.value,
        persona : persona.value
    }
    console.log(objMss);
    if(persona.value == ''){
        alert('Escribe tu nombre');
    }else if(mensaje.value != ''){
        socket.emit('nuevo mensaje', objMss);
        mensaje.value = '';
    }else{
        alert('Escribe algo en mensaje ):');
    }

});
socket.on('nuevo mensaje servidor', data => {
    console.log('data: ', data);
    
    var lista_mensajes = document.getElementById('div_mensaje');
    var html = "<strong>"+data.persona+"</strong> "+": "+data.mensaje;
    var div = document.createElement("div");
    div.innerHTML = html;
    lista_mensajes.appendChild(div);
});