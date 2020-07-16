const { io } = require('./index');
const { User } = require('./../clases/usuario');
const { crearMensaje } = require('./../utilies/utilidades');

const usuarios = new User();


io.on('connection', (client) => {
  client.on('dispatch', (data, callback) => {
    client.broadcast.emit('statusActual', {
      event: "dispatch"
    });
    callback();
  });
  client.on('transport', (data, callback) => {
    client.broadcast.emit('statusActual', {
      event: "transport"
    });
    callback();
  });
  client.on('reception', (data, callback) => {
    console.log(data);
    client.broadcast.emit('statusActual', {
      event: "reception"
    });
    callback();
  });

  client.on('entrarChat', (data, callback) => {
    console.log(data,'entre');
     client.join(data.order);
     usuarios.agregarPersonas(client.id, data.nombre, data.order);
     client.broadcast.to(data.order).emit('listaPersonas', usuarios.getPersonasChat(data.sala));
    client.broadcast.to(data.order).emit('crearMensaje', crearMensaje('demo'), data.nombre);
    callback();
  });
   client.on('crearMensaje', (data, callback) => {
    console.log('adsa',data);
  });
});

