import React from 'react'
import mediumLogo from '../assets/medium.svg'
import avatar from '../assets/avatar.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <nav className='flex justify-between items-center shadow-lg p-5 mb-5'>
        <Link to={'/'}>
          <img src={mediumLogo} className='w-40' alt="" />      
        </Link>
        <img src={avatar} alt="" className='w-10 rounded-full' />
      </nav>
    </header>
  )
}

export default Navbar