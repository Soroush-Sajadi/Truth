import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

const SignIn = () => {
  const [ name ,setName ] = useState ('');
  const [ room ,setRoom ] = useState ('');
  const [ pass ,setPass ] = useState ('');
  const dispatch = useDispatch();



  const join = () => {
    if ( name !== '' && room !== '' && pass !== '') {
      dispatch({type:"SIGN_IN_USER", payload: {name:name, room: room, pass:pass}})
    }
  };

  return(
    <div className="signin-wrapper">
      <input type="text" placeholder="Name" onChange={event => setName(event.target.value)} />
      <input type="text" placeholder="Room" onChange={event => setRoom(event.target.value)}/>
      <input type="password" placeholder="Password" onChange={event => setPass(event.target.value)}/>
      <input type="submit" value="Join" onClick={join} />
      <Link to="/newroom">
        <input type="submit" value="New Room"/>
      </Link>
    </div>
  )
}

export default SignIn;