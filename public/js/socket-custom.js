var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
})

socket.on('disconnect',
    function() {
        console.log('Conexión con el servidor perdida');
    })

socket.emit('sendMessage', {
    user: 'Atuel',
    message: 'Hello world!'
}, function(resp) {
    console.log(resp);
})

socket.on('sendMessage', function(message) {
    console.log('Servidor:', message);
})