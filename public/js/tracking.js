var socket = io();
//
var listDo = document.getElementsByClassName('dot');
var progress = document.getElementsByClassName('progress');


$('#searchValue').on('click', function () {
 
  var valueCode = $('#orderInput').val();
  var usuario = {
    nombre: 'cliente',
    order:valueCode
  }
   socket.emit('entrarChat',usuario,function (resp) {
     console.log('client',resp);
   })
});

socket.on('connect', function () {
  console.log('conectado al server');

  socket.on('statusActual', function (data) {
    switch (data.event) {
      case 'dispatch':
        listDo[0].className += " completed";
        console.log(listDo[0].classList);
        $('.progress').css('width', '25%');
        break;
      case 'transport':
        listDo[1].className += "current";
         
        $('.progress').css('width', '50%');
        break;
      case 'reception':
        listDo[0].className += " completed";
        listDo[1].className += " completed";
        listDo[2].className += " completed";
        $('.progress').css('width', '100%');
        break;
      default:
        return;
        break;
    }
  });

  socket.on('listaPersonas', function (order) {
      console.log()
  })


});

