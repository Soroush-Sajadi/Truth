"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
const express = require("express");
const route_1 = __importDefault(require("./route"));
const user_1 = require("./Helper/user");
const app = express();
const PORT = process.env.PORT || 5000;
const server = http_1.default.createServer(app);
const io = socket_io_1.default(server);
app.use(route_1.default);
io.on("connection", (socket) => {
    socket.on('join', (userNewRoom) => {
        // // tslint:disable-next-line:no-console
        // console.log(userNewRoom.room)
        const res = user_1.makeRoom(userNewRoom.room, userNewRoom.pass, socket.id);
        if (res === false)
            return socket.emit('joinMessage', { user: 'admin', text: 'false' });
        socket.emit('joinMessage', { user: 'admin', text: ` Welcome to the room ${userNewRoom.room}` });
    });
    socket.on('signIn', (userSignIn) => {
        // tslint:disable-next-line:no-console
        const res = user_1.joinUser(userSignIn.name, userSignIn.room, userSignIn.pass);
        if (res === false)
            return socket.emit('joinMessage', { user: 'admin', text: 'false' });
        socket.emit('joinMessage', { user: 'admin', text: `Welcome to the room ${userSignIn.room}` });
        socket.broadcast.to(userSignIn.room).emit('joinMessage', { user: 'admin', text: `${userSignIn.name} has joined` });
    });
    socket.on('disconnect', () => {
        // tslint:disable-next-line:no-console
        console.log('user disconnected');
    });
});
server.listen(PORT, 
// tslint:disable-next-line:no-console
() => console.log(`Server has started on port ${PORT}`));
//# sourceMappingURL=index.js.map