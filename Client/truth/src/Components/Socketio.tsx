import React, { useEffect } from 'react';
import SignIn from './SignIn';
import io from 'socket.io-client';
import { RootState } from '../Redux/store';
import { NewRoomState } from '../Redux/newRoomReducer';
import { SignInState } from '../Redux/signInReducer'
import { JoinMessageState } from '../Redux/joinMessageReducer'
import { useDispatch, useSelector } from 'react-redux';



let socket: any;

const Socketio = () => {
  const ENDPOINT: string = 'localhost:5000';
  const userNewRoom: NewRoomState = useSelector((state: RootState) => state.newRoom);
  const userSignIn: SignInState = useSelector((state: RootState) => state.signIn);

  useEffect(() =>  {
    socket = io(ENDPOINT);
    if (userNewRoom.room !== '' && userNewRoom.pass !== '') {
      socket.emit('join', userNewRoom, () => {
      });
  
      return () => {
        socket.close();
        socket.emit('disconnect');
      }
    }
  },[userNewRoom]);

useEffect(() =>  {
  if(userSignIn.name !== '' && userSignIn.room !== '' && userSignIn.pass !== '') {
    socket.emit('signIn', userSignIn, () => {
    });  
  }
  },[userSignIn]);

  useEffect(() => {
    socket.on('joinMessage', (message: JoinMessageState) => {
    //   if (message.text !== 'false') {
    //     dispatch({type:"OWNER", payload: name})
    //     getPreviousMessages()
    //     dispatch({type:"ADD_MSGS_CHAT", payload: message })
    //   } else{
    //     dispatch({type:"ERROR", payload: true})
    //   }
    console.log(message)
    })
  },[userSignIn]);

  return(
    <>
      <SignIn />
    </>
  )
}

export default Socketio;