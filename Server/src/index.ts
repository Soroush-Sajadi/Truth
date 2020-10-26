// tslint:disable-next-line:no-console
import { Application } from 'express';
import socketio from "socket.io";
import http from 'http';
import express = require('express');
import route from './route';

const app: Application = express();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app)
const io = socketio(server);

app.use(route);

io.on("connection", (socket: any) => {
    
  });


server.listen(PORT,
    // tslint:disable-next-line:no-console
    () => console.log(`Server has started on port ${PORT}`))