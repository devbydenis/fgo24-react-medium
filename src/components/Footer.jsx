import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='px-20 border-t border-gray-300 pt-5'>
      <ul className='flex justify-center gap-3'>
        <li><Link to={"#"} className='text-gray-600'>Help</Link></li>
        <li><Link to={"#"} className='text-gray-600'>Status</Link></li>
        <li><Link to={"#"} className='text-gray-600'>About</Link></li>
        <li><Link to={"#"} className='text-gray-600'>Careers</Link></li>
        <li><Link to={"#"} className='text-gray-600'>Press</Link></li>
        <li><Link to={"#"} className='text-gray-600'>Blog</Link></li>
        <li><Link to={"#"} className='text-gray-600'>Privacy</Link></li>
        <li><Link to={"#"} className='text-gray-600'>Rules</Link></li>
        <li><Link to={"#"} className='text-gray-600'>Terms</Link></li>
        <li><Link to={"#"} className='text-gray-600'>Text to speech</Link></li>
      </ul>
      <p className='text-center text-gray-600 mt-4'>© 2025 Medium, Inc.</p>
    </footer>
  )
}

export default Footer