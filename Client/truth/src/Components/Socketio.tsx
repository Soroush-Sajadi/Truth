import React, { useEffect } from 'react';
import SignIn from './SignIn';
import io from 'socket.io-client';
import { RootState } from '../Redux/store';
import { NewRoomState } from '../Redux/newRoomReducer';
import { SignInState } from '../Redux/signInReducer'
import { useDispatch, useSelector } from 'react-redux';



let socket: any;

const Socketio = () => {
  const ENDPOINT: string = 'localhost:5000';
  const userNewRoom: NewRoomState = useSelector((state: RootState) => state.newRoom);
  const userSignIn: SignInState = useSelector((state: RootState) => state.signIn);
  useEffect(() =>  {
    socket = io(ENDPOINT)
    socket.emit('join', userNewRoom, () => {
    });

    return () => {
      socket.close();
      socket.emit('disconnect');
    }
},[userNewRoom]);

useEffect(() =>  {
  socket.emit('signIn', {userSignIn}, () => {
  });
  },[userSignIn]);

  return(
    <>
      <SignIn />
    </>
  )
}

export default Socketio;