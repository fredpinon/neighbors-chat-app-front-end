import io from 'socket.io-client';
import socketIOWildcard from 'socketio-wildcard';

export default store => {

  let socket;

  const connect = data => {
    socket = io('http://localhost:4000');
    socketIOWildcard(io.Manager)(socket);
    socket.emit('SOCKET__CONNECT', data);
    socket.on('ACTION', action => {
      console.log(action);
      store.dispatch(action);
    })
  }

  const disconnect = (data) => {
    socket.emit('SOCKET__DISCONNECT', data);
    socket.disconnect();
  }

  // const emitTyping = (info) => {
  //   socket.emit('is-typing', info);
  // }
  //
  // const emitStopedTyping = (info) => {
  //   socket.emit('stoped-typing', info);
  // }
  //
  // const saveMessage = (msgInfo) => {
  //   socket.emit('new-message', msgInfo);
  // }
  //
  // const getMessages = (address) => {
  //   socket.emit('get-messages', address);
  // }
  //
  //
  // const state = store.getState();
  // const token = state.user.token

  // if (token) {
  //   const { email, address } = state.user.details;
  //   connect(email, address);
  // }

  return next => action => {
    switch (action.type) {
      case 'SOCKET__CONNECT':
        connect(action.data)
        break;
      case 'SOCKET__DISCONNECT':
        console.log(action);
        disconnect(action.data)
        break;
      // case 'SOCKET__MESSAGE':
      //   saveMessage(action.payload)
      //   break;
      // case 'GET__MESSAGES':
      //   getMessages(action.payload.address)
      //   break;
      // case 'IS_TYPING':
      //   emitTyping(action.payload)
      //   break;
      // case 'STOPED_TYPING':
      //   emitStopedTyping(action.payload)
      //   break;
      default:
    }

    next(action);
  }
}
