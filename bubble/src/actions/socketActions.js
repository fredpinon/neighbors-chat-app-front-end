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
