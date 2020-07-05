const { io } = require('../server')

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('sendMessage', {
        user: 'Admin',
        message: 'bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });


    client.on('sendMessage', (data, callback) => {

        console.log(data);

        client.broadcast.emit('sendMessage', data);

        // if (message.user) {
        //     callback({
        //         resp: 'Todo OK'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo mal'
        //     })
        // }
    });
});