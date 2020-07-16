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
    client.broadcast.emit('statusActual', {
      event: "reception"
    });
    callback();
  });


  client.on('entrarChat', (data, callback) => {
    if (!data.nombre || !data.order) {
      return callback({
        error: true,
        mensaje: 'El nombre/order no existe'
      });
    }

    client.join(data.order);

    usuarios.agregarPersonas(client.id, data.nombre, data.order);

    client.broadcast.to().emit()
    client.broadcast.to().emit()
    callback(usuarios.getPersonasChat(data.order))

  })





})
