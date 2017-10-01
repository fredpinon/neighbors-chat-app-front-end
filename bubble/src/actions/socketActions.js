export const socketConnect = data => ({
  type: 'SOCKET__CONNECT',
  data
});

export const socketDisconnect = data => ({
  type: 'SOCKET__DISCONNECT',
  data
});

export const broadcastMessage = payload => ({
  type: 'SOCKET__MESSAGE',
  data : {
    address: payload.address,
    username: payload.username,
    name: `${payload.fname} ${payload.lname}`,
    msg: payload.msg,
  }
});

export const socketGetMessages = data => ({
  type: 'SOCKET__GET__MESSAGES',
  data
});

export const broadcastIsTyping = payload => ({
  type: 'IS_TYPING',
  data : {
    username: payload.username,
    fname: payload.fname,
    lname: payload.lname,
    address: payload.address,
  }
});

export const broadcastStoppedTyping = payload => ({
  type: 'STOPPED_TYPING',
  data : {
    username: payload.username,
    fname: payload.fname,
    lname: payload.lname,
    address: payload.address,
  }
});
