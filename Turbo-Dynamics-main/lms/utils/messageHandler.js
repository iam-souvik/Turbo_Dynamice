export default (io, socket) => {
  const createdMessage = (msg) => {
    console.log("msg ,new", msg);
    socket.broadcast.emit("newIncomingMessage", msg);
  };

  socket.on("createdMessage", createdMessage);
};
