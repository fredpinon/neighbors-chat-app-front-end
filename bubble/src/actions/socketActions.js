export const socketConnect = data => ({
  type: 'SOCKET__CONNECT',
  data
});

export const socketDisconnect = data => ({
  type: 'SOCKET__DISCONNECT',
  data
});
