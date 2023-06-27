const http = require("http");
const app = require("express")();
const socketIO = require("socket.io");

const server = http.createServer(app);
const PORT = 8000;

// socket config
const io = socketIO(server);
let arrMsg = [];
app.io = io;
app.arrMsg = arrMsg;

io.on("connection", (socket) => {
  socket.on("JoinChat", (data) => {
    console.log("user join :", data);
  });
  socket.on("disconnect", () => {
    console.log("user disconnect");
  });
});

server.listen(8000, () => console.log("socket server is running"));
