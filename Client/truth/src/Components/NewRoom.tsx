import React, { useState } from 'react';

const NewRoom = () => {
  const [ room, setRoom ] = useState('');
  const [ pass, setPass ] = useState('');

  const makeRoom = () => {
    console.log(room, pass);
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