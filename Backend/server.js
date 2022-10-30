const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {})

io.on("connection", (socket) =>{
    console.log("what is socket", socket)
    console.log("socket is activated")
    socket.on("chat", (payload) => {
        console.log("what is payload", payload);
        io.emit("chat", payload);
    });
});

server.listen(3000,() => console.log("server is active..."))

