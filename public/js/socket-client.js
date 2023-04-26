const socket = io();

const lblOnline = document.querySelector('#lnlOnline');
const lblOffline = document.querySelector('#lnlOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

socket.on('connect', () => {
    console.log('conectado');
    lblOnline.style.display = '';
    lblOffline.style.display = 'none';
});

socket.on('disconnect', () => {
    console.log('desconectado');
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

socket.on('enviar-mensaje', ( payload ) => {
    console.log( payload );
});

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123abc',
        fecha: new Date().getTime()
    };

    socket.emit( 'enviar-mensaje', payload, ( id ) => {
        console.log('Desde el server ', id);
    });
});