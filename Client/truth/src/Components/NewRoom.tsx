import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';



const NewRoom = () => {
  const [ room, setRoom ] = useState('');
  const [ pass, setPass ] = useState('');
  const dispatch = useDispatch()

  const makeRoom = () => {
    if (room !== '' && pass !== '') {
      dispatch({type: "NEW_ROOM", payload: {room: room, pass: pass}})
    }
  }
  return(
    <div>
      <input type="text" placeholder="Room" onChange={event => setRoom(event.target.value)} />
      <input type="password" placeholder="password" onChange={event => setPass(event.target.value)} />
      <input type="submit" value="Make Room" onClick={makeRoom} />
    </div>
  )
}

export default NewRoom;