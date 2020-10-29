// tslint:disable-next-line:no-console
import { Application } from 'express';
import socketio from "socket.io";
import http from 'http';
import express = require('express');
import route from './route';
import { joinUser, makeRoom } from './Helper/user';
export interface SignInState {
  name: string
  room: string
  pass: string
}
export interface NewRoomState {
  room: string
  pass: string
}


const app: Application = express();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app)
const io = socketio(server);

app.use(route);

io.on("connection", (socket: any) => {

  socket.on('join', ( userNewRoom: NewRoomState  )  => {
        // // tslint:disable-next-line:no-console
        // console.log(userNewRoom.room)
    const res  = makeRoom(userNewRoom.room, userNewRoom.pass, socket.id);

    if (res === false) return socket.emit('joinMessage', {user: 'admin', text: 'false'});

    socket.emit('joinMessage', {user: 'admin', text: ` Welcome to the room ${userNewRoom.room}`});
  })
  socket.on('signIn', ( userSignIn: SignInState)  => {
    // tslint:disable-next-line:no-console
    const res  = joinUser(userSignIn.name, userSignIn.room, userSignIn.pass);

    if (res === false) return socket.emit('joinMessage', {user: 'admin', text: 'false'});

    socket.emit('joinMessage', {user: 'admin', text: `Welcome to the room ${userSignIn.room}`});
    socket.broadcast.to(userSignIn.room).emit('joinMessage', {user: 'admin', text: `${userSignIn.name} has joined`});
  })

  socket.on('disconnect', () => {
    // tslint:disable-next-line:no-console
    console.log('user disconnected')
  })
});


server.listen(PORT,
    // tslint:disable-next-line:no-console
    () => console.log(`Server has started on port ${PORT}`))