import React, { useContext } from 'react'
import { AuthContext } from '../../../../src/context/AuthContext'

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className='navbarChat'>
      <span className="logoChat">ROM/IDS Chat</span>
      <div className="userChat">
        {/* <img src={currentUser.photoURL} alt="" /> */}
        <span>{currentUser.displayName}</span>
        {/* <button onClick={() => signOut(auth)}>logout</button> */}
      </div>
    </div>
  )
}

export default Navbar