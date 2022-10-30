const express = require('express');
const app = express();

// connecting our express app with http server
const httpServer = require('http').Server(app);
const PORT = 3000;

app.use(express.static('./src/'));

const io = require('socket.io')(httpServer);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
});

io.on('connection', (socket) => {
  console.log('Server Connected Successfully');

  socket.on('send-message', (msg) => {
    console.log(msg);
  });
});

httpServer.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
