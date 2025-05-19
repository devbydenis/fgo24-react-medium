import React from 'react'
import mediumLogo from '../assets/medium.svg'

function Navbar() {
  return (
    <header>
      <nav className='text-center shadow-lg p-2 mb-5'>
        <img src={mediumLogo} className='w-40' alt="" />
      </nav>
    </header>
  )
}

export default Navbar