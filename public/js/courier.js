var socket = io();
/* var usuario = {
  nombre: 'courier',
  order:
} */

console.log('aca');

$(document).ready(function () {
  socket.on('connect', function () {
    console.log('conectar al server');
 
    
  });


  socket.on('disconnect', function () {
    console.log('Desconectar al server');
  });




  $('#first').on('click', function () {
    socket.emit('dispatch', null, function () {
      console.log('callback dispatch');
    });


  });


  $('#second').on('click', function () {
    socket.emit('transport', null, function () {
      console.log('callback transport');
    });
  });


  $('#three').on('click', function () {
    socket.emit('reception', null, function () {
      console.log('callback reception');
    });
  });
     let codeValue = codeOrderValue
    var usuario = {
      nombre: 'courier',
      order: codeValue
    }
   socket.emit('entrarChat', usuario, function (resp) {
      console.log('delete');
    });

});



