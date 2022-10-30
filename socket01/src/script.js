const form = document.getElementById('form');

const socket = io();

socket.on('connect', () => {
  console.log('Connection Successful');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = form.querySelector('input');

  socket.emit('send-message', msg.value);

  msg.value = '';
});
