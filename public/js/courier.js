var socket = io();

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





