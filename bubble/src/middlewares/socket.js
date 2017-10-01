import io from 'socket.io-client';
import socketIOWildcard from 'socketio-wildcard';

export default store => {

  let socket;

  const connect = data => {
    socket = io('http://localhost:4000');
    socketIOWildcard(io.Manager)(socket);
    socket.emit('SOCKET__CONNECT', data);
    socket.on('ACTION', action => {
      store.dispatch(action);
    })
  }

  const disconnect = data => {
    socket.emit('SOCKET__DISCONNECT', data);
    socket.disconnect();
  }

  const getMessages = data => socket.emit('GET-MESSAGES', data);

  const broadcastMessage = data => socket.emit('NEW__MESSAGE', data);

  const emitTyping = data => socket.emit('IS_TYPING', data);

  const emitStoppedTyping = data => socket.emit('STOPPED_TYPING', data);

  const state = store.getState();
  const token = state.user.token

  if (token) {
    const { username, address } = state.user.details;
    connect({details:{username, address}});
  }

  return next => action => {
    switch (action.type) {
      case 'SOCKET__CONNECT':
        connect(action.data)
        break;
      case 'SOCKET__DISCONNECT':
        disconnect(action.data)
        break;
      case 'SOCKET__MESSAGE':
        broadcastMessage(action.data)
        break;
      case 'SOCKET__GET__MESSAGES':
        getMessages(action.data)
        break;
      case 'IS_TYPING':
        emitTyping(action.data)
        break;
      case 'STOPPED_TYPING':
        emitStoppedTyping(action.data)
        break;
      default:
    }

    next(action);
  }
}
