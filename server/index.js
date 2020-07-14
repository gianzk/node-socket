const express = require('express');
const SocketIO = require('socket.io');
const bodyParser = require('body-parser');

const path = require('path');
const http = require('http');

const router = require('./route');

const app = express();
let server = http.createServer(app);
let io = SocketIO(server);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 4700;



app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use('/order', router);



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});

